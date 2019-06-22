async function getActivities() {
    const res = await fetch('data/data.json');
    const data = await res.json();

    // Add an ID to the tours for easier manipulation
    for (let i = 0; i < data.tours.length; i++) {
        data.tours[i].id = i;
    }

    return data;
}

export default getActivities;