import { BigInt, Address } from "@graphprotocol/graph-ts"
import {
  enj,
  TransferBatch,
  TransferSingle,
  URI
} from "../generated/enj/enj"
import { Asset, EthAddress,Transfer, Counter,AssetBalance } from "../generated/schema"


export function handleTransferBatch(event: TransferBatch): void {
  var ids=event.params._ids
  var vals=event.params._values
  var ind=BigInt.fromI32(0)
  for (let i=0;i<event.params._ids.length;i++)
  {
    let val=vals[i]
    let assetid=ids[i]

    let transf=transfercrl(event.transaction.hash.toHex()+'--'+assetid.toString())
    let oldaddr=ethaddresscrl(event.params._from)
    let newaddr=ethaddresscrl(event.params._to)
    let oldbal=assbalcrl(oldaddr.id,assetid.toString())
    let newbal=assbalcrl(oldaddr.id,assetid.toString())
    assetcrl(assetid)
    transf.from=event.params._from.toHex()
    transf.to=event.params._to.toHex()
    transf.operator=event.params._operator
    transf.value=val
    transf.asset=assetid.toString()
    transf.save()

    oldbal.count=oldbal.count-val
    if (oldbal.count<BigInt.fromI32(0)) {
      oldbal.count=BigInt.fromI32(0)
    }
    newbal.count=newbal.count+val
    oldbal.save()
    newbal.save()
  }
}

export function handleTransferSingle(event: TransferSingle): void {
  let val=event.params._value
  let assetid=event.params._id
  let transf=transfercrl(event.transaction.hash.toHex()+'--'+assetid.toString())
  let oldaddr=ethaddresscrl(event.params._from)
  let newaddr=ethaddresscrl(event.params._to)
  let oldbal=assbalcrl(oldaddr.id,assetid.toString())
  let newbal=assbalcrl(oldaddr.id,assetid.toString())
  assetcrl(assetid)
  transf.from=event.params._from.toHex()
  transf.to=event.params._to.toHex()
  transf.operator=event.params._operator
  transf.value=event.params._value
  transf.asset=assetid.toString()
  transf.save()

  oldbal.count=oldbal.count-val
  if (oldbal.count<BigInt.fromI32(0)) {
    oldbal.count=BigInt.fromI32(0)
  }
  newbal.count=newbal.count+val
  oldbal.save()
  newbal.save()

}

export function handleURI(event: URI): void {
  let asset=assetcrl(event.params._id)
  asset.value=event.params._value
  asset.save()
}

export function assetcrl(assetid: BigInt): Asset {
  let asst = Asset.load(assetid.toString());
  if (asst == null) {
    asst = new Asset(assetid.toString());
    let count=countercrl()
    count.assetscounter=count.assetscounter+BigInt.fromI32(1)
    count.save()
  }
  asst.save()
  return asst as Asset
}

export function ethaddresscrl(ethaddr: Address): EthAddress {
  let etha = EthAddress.load(ethaddr.toHex());
  if (etha == null) {
    etha = new EthAddress(ethaddr.toHex());
    etha.save()
    let count=countercrl()
    count.addressescounter=count.addressescounter+BigInt.fromI32(1)
    count.save()
  }
  return etha as EthAddress
}

export function transfercrl(transferid: String): Transfer {
  let transfer = Transfer.load(transferid.toString());
  if (transfer == null) {
    transfer = new Transfer(transferid.toString());
    transfer.save()
    let count=countercrl()
    count.transferscounter=count.transferscounter+BigInt.fromI32(1)
    count.save()
  }
  return transfer as Transfer
}

export function countercrl(): Counter {
  let count = Counter.load('counter');
  if (count == null) {
    count = new Counter('counter');
    count.assetscounter=BigInt.fromI32(0)
    count.transferscounter=BigInt.fromI32(0)
    count.addressescounter=BigInt.fromI32(0)
    count.save()
  }
  return count as Counter
}

export function assbalcrl(addres: String, assetid: String): AssetBalance {
  let assbid=addres+'-'+assetid.toString()
  let assb = AssetBalance.load(assbid.toString());
  if (assb == null) {
    assb = new AssetBalance(assbid.toString());
    assb.count=BigInt.fromI32(0)
    assb.assetowner=addres.toString()
    assb.asset=assetid.toString()
    assb.save()
  }
  return assb as AssetBalance
}