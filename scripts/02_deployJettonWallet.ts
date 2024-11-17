import { toNano } from '@ton/core';
import { NusicJettonWallet } from '../wrappers/NusicJettonWallet';
import { compile, NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const nusicJettonWallet = NusicJettonWallet.createFromConfig({}, await compile('NusicJettonWallet'));

    await provider.deploy(nusicJettonWallet, toNano('0.05'));

    const openedContract = provider.open(nusicJettonWallet);

    // run methods on `openedContract`
}
