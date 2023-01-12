import CreateGarage from "../pages/create-garage";

export async function getData() {
    try {
        const response = await fetch('http://127.0.0.1:3000/garage');
        const json = await response.json();
        CreateGarage(json);
        return json;
    }
    catch {

    }
}