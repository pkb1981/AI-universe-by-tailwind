const loadHub = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const data = await res.json();
    const hubTools = data.data.tools;
    displayHubTools(hubTools);
}
const displayHubTools = (hubTools) => {
    console.log(hubTools);
}
loadHub();