import prisma from "../src/database/database.js";

async function main() {
    await prisma.series.createMany({
        data: [
            { 
                "name": "SPYxFAMILY", 
                "author": "Tatsuya Endo", 
                "genre": "shounen",
                "image": "https://m.media-amazon.com/images/I/71RPJe1eVCL.jpg" 
            },
            { 
                "name": "Attack on Titan", 
                "author": "Hajime Isayama", 
                "genre": "seinen",
                "image": "https://m.media-amazon.com/images/I/51r5Zr3BzCL._SX331_BO1,204,203,200_.jpg" 
            },
            { 
                "name": "Chainsaw Man", 
                "author": "Tatsuki Fujimoto", 
                "genre": "seinen",
                "image": "https://m.media-amazon.com/images/I/51BeRXEKuWL._SX339_BO1,204,203,200_.jpg" 
            }
        ]
    });
}

main()
    .then(() => {
        console.log("New manga series added!")
    })
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });