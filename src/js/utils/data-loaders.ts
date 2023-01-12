export async function getData() {
    try {
        const response = await fetch('http://127.0.0.1:3000/garage');
        const json = await response.json();
        console.log(json);
    }
    catch {

    }
}