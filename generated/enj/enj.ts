// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AcceptAssignment extends ethereum.Event {
  get params(): AcceptAssignment__Params {
    return new AcceptAssignment__Params(this);
  }
}

export class AcceptAssignment__Params {
  _event: AcceptAssignment;

  constructor(event: AcceptAssignment) {
    this._event = event;
  }

  get _id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _creator(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get _owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class Assign extends ethereum.Event {
  get params(): Assign__Params {
    return new Assign__Params(this);
  }
}

export class Assign__Params {
  _event: Assign;

  constructor(event: Assign) {
    this._event = event;
  }

  get _id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _to(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class TransferBatch extends ethereum.Event {
  get params(): TransferBatch__Params {
    return new TransferBatch__Params(this);
  }
}

export class TransferBatch__Params {
  _event: TransferBatch;

  constructor(event: TransferBatch) {
    this._event = event;
  }

  get _operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get _ids(): Array<BigInt> {
    return this._event.parameters[3].value.toBigIntArray();
  }

  get _values(): Array<BigInt> {
    return this._event.parameters[4].value.toBigIntArray();
  }
}

export class TransferSingle extends ethereum.Event {
  get params(): TransferSingle__Params {
    return new TransferSingle__Params(this);
  }
}

export class TransferSingle__Params {
  _event: TransferSingle;

  constructor(event: TransferSingle) {
    this._event = event;
  }

  get _operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get _id(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get _value(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class URI extends ethereum.Event {
  get params(): URI__Params {
    return new URI__Params(this);
  }
}

export class URI__Params {
  _event: URI;

  constructor(event: URI) {
    this._event = event;
  }

  get _value(): string {
    return this._event.parameters[0].value.toString();
  }

  get _id(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class enj extends ethereum.SmartContract {
  static bind(address: Address): enj {
    return new enj("enj", address);
  }

  balanceOf(_owner: Address, _id: BigInt): BigInt {
    let result = super.call(
      "balanceOf",
      "balanceOf(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromUnsignedBigInt(_id)
      ]
    );

    return result[0].toBigInt();
  }

  try_balanceOf(_owner: Address, _id: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "balanceOf",
      "balanceOf(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromUnsignedBigInt(_id)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOfBatch(_owners: Array<Address>, _ids: Array<BigInt>): Array<BigInt> {
    let result = super.call(
      "balanceOfBatch",
      "balanceOfBatch(address[],uint256[]):(uint256[])",
      [
        ethereum.Value.fromAddressArray(_owners),
        ethereum.Value.fromUnsignedBigIntArray(_ids)
      ]
    );

    return result[0].toBigIntArray();
  }

  try_balanceOfBatch(
    _owners: Array<Address>,
    _ids: Array<BigInt>
  ): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "balanceOfBatch",
      "balanceOfBatch(address[],uint256[]):(uint256[])",
      [
        ethereum.Value.fromAddressArray(_owners),
        ethereum.Value.fromUnsignedBigIntArray(_ids)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  isApprovedForAll(_owner: Address, _operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromAddress(_operator)
      ]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    _owner: Address,
    _operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromAddress(_operator)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  supportsInterface(_interfaceID: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(_interfaceID)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(_interfaceID: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(_interfaceID)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  uri(_id: BigInt): string {
    let result = super.call("uri", "uri(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(_id)
    ]);

    return result[0].toString();
  }

  try_uri(_id: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("uri", "uri(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(_id)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }
}

export class AcceptAssignmentCall extends ethereum.Call {
  get inputs(): AcceptAssignmentCall__Inputs {
    return new AcceptAssignmentCall__Inputs(this);
  }

  get outputs(): AcceptAssignmentCall__Outputs {
    return new AcceptAssignmentCall__Outputs(this);
  }
}

export class AcceptAssignmentCall__Inputs {
  _call: AcceptAssignmentCall;

  constructor(call: AcceptAssignmentCall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class AcceptAssignmentCall__Outputs {
  _call: AcceptAssignmentCall;

  constructor(call: AcceptAssignmentCall) {
    this._call = call;
  }
}

export class AssignCall extends ethereum.Call {
  get inputs(): AssignCall__Inputs {
    return new AssignCall__Inputs(this);
  }

  get outputs(): AssignCall__Outputs {
    return new AssignCall__Outputs(this);
  }
}

export class AssignCall__Inputs {
  _call: AssignCall;

  constructor(call: AssignCall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _creator(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class AssignCall__Outputs {
  _call: AssignCall;

  constructor(call: AssignCall) {
    this._call = call;
  }
}

export class CreateCall extends ethereum.Call {
  get inputs(): CreateCall__Inputs {
    return new CreateCall__Inputs(this);
  }

  get outputs(): CreateCall__Outputs {
    return new CreateCall__Outputs(this);
  }
}

export class CreateCall__Inputs {
  _call: CreateCall;

  constructor(call: CreateCall) {
    this._call = call;
  }

  get _name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _totalSupply(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _initialReserve(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _supplyModel(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _meltValue(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _meltFeeRatio(): i32 {
    return this._call.inputValues[5].value.toI32();
  }

  get _transferable(): i32 {
    return this._call.inputValues[6].value.toI32();
  }

  get _transferFeeSettings(): Array<BigInt> {
    return this._call.inputValues[7].value.toBigIntArray();
  }

  get _nonFungible(): boolean {
    return this._call.inputValues[8].value.toBoolean();
  }
}

export class CreateCall__Outputs {
  _call: CreateCall;

  constructor(call: CreateCall) {
    this._call = call;
  }
}

export class MeltCall extends ethereum.Call {
  get inputs(): MeltCall__Inputs {
    return new MeltCall__Inputs(this);
  }

  get outputs(): MeltCall__Outputs {
    return new MeltCall__Outputs(this);
  }
}

export class MeltCall__Inputs {
  _call: MeltCall;

  constructor(call: MeltCall) {
    this._call = call;
  }

  get _ids(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }

  get _values(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }
}

export class MeltCall__Outputs {
  _call: MeltCall;

  constructor(call: MeltCall) {
    this._call = call;
  }
}

export class MintFungiblesCall extends ethereum.Call {
  get inputs(): MintFungiblesCall__Inputs {
    return new MintFungiblesCall__Inputs(this);
  }

  get outputs(): MintFungiblesCall__Outputs {
    return new MintFungiblesCall__Outputs(this);
  }
}

export class MintFungiblesCall__Inputs {
  _call: MintFungiblesCall;

  constructor(call: MintFungiblesCall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _to(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }

  get _values(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }
}

export class MintFungiblesCall__Outputs {
  _call: MintFungiblesCall;

  constructor(call: MintFungiblesCall) {
    this._call = call;
  }
}

export class MintNonFungiblesCall extends ethereum.Call {
  get inputs(): MintNonFungiblesCall__Inputs {
    return new MintNonFungiblesCall__Inputs(this);
  }

  get outputs(): MintNonFungiblesCall__Outputs {
    return new MintNonFungiblesCall__Outputs(this);
  }
}

export class MintNonFungiblesCall__Inputs {
  _call: MintNonFungiblesCall;

  constructor(call: MintNonFungiblesCall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _to(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }
}

export class MintNonFungiblesCall__Outputs {
  _call: MintNonFungiblesCall;

  constructor(call: MintNonFungiblesCall) {
    this._call = call;
  }
}

export class SafeBatchTransferFromCall extends ethereum.Call {
  get inputs(): SafeBatchTransferFromCall__Inputs {
    return new SafeBatchTransferFromCall__Inputs(this);
  }

  get outputs(): SafeBatchTransferFromCall__Outputs {
    return new SafeBatchTransferFromCall__Outputs(this);
  }
}

export class SafeBatchTransferFromCall__Inputs {
  _call: SafeBatchTransferFromCall;

  constructor(call: SafeBatchTransferFromCall) {
    this._call = call;
  }

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _ids(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get _values(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get _data(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class SafeBatchTransferFromCall__Outputs {
  _call: SafeBatchTransferFromCall;

  constructor(call: SafeBatchTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _id(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _value(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _data(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get _operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class SetURICall extends ethereum.Call {
  get inputs(): SetURICall__Inputs {
    return new SetURICall__Inputs(this);
  }

  get outputs(): SetURICall__Outputs {
    return new SetURICall__Outputs(this);
  }
}

export class SetURICall__Inputs {
  _call: SetURICall;

  constructor(call: SetURICall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _uri(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class SetURICall__Outputs {
  _call: SetURICall;

  constructor(call: SetURICall) {
    this._call = call;
  }
}
