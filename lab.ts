interface Mountain {
    name: string;
    height: number;
};


const mountains: Mountain[] = [{name: "Kilamanjaro", height: 19341}, {name: "Everest", height: 29029}, {name: "Denali", height: 20310}];

function findTallestMountain(arr: Mountain[]): string {
    let lowest: any = arr[0];
    arr.forEach((element)=>{
        if (element.height > lowest.height){
            lowest = element;
        }
    })
    return lowest.name;
};

let tallestMountain: string = findTallestMountain(mountains);
console.log(tallestMountain);


interface Product {
    name: string;
    price: number;
}

const products: Product[] = [{name: "Granola Bar", price: 5}, {name: "Pencil", price: .50}, {name: "Book", price: 35}];

const calcAverageProductPrice = (arr: Product[]): number => {
    let sum: number = 0;
    arr.forEach((element)=>{
        sum += element.price
    })
    return sum / arr.length
}

let average: number = calcAverageProductPrice(products);
console.log(average);


interface InventoryItem {
    product: Product;
    quantity: number;
}

const inventory: InventoryItem[] = [{product: {name: "Motor", price: 10}, quantity: 10}, {product: {name: "Sensor", price: 12.5}, quantity: 4}, {product: {name: "LED", price: 1}, quantity: 20}];

const calcInventoryValue = (arr: InventoryItem[]): number => {
    let total: number = 0;
    let current: number = 0;
    arr.forEach((element)=>{
        current = element.product.price * element.quantity;
        total += current;
    })
    return total;
};

let value: number = calcInventoryValue(inventory);
console.log(value);