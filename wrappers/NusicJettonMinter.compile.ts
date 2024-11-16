import { CompilerConfig } from '@ton/blueprint';

export const compile: CompilerConfig = {
    targets: ['contracts/imports/stdlib.fc', 'contracts/params.fc','contracts/op-codes.fc','contracts/discovery-params.fc','contracts/nusic-jetton-utils.fc','contracts/nusic-jetton-minter-discoverable.fc'],
};
