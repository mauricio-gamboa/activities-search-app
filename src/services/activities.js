async function getActivities() {
    const res = await fetch('data/data.json');
    const data = await res.json();
    return data;
}

export default getActivities;