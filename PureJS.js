// this is pure JavaScript

async function fetchNodeCount() {
    try {
        const response = await import('node-fetch').then(({default: fetch}) => fetch('https://faucet-api.koii.network/api/leaderboard/get-nodes-summary'));
        const { totalNumberOfActiveStakingKeys: nodeCount } = await response.json();
        console.log(`Nodes: ${nodeCount}`);
    } catch (error) {
        console.error('Error loading node count', error);
    }
}

fetchNodeCount();






