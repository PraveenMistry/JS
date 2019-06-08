// EX 1) Finding Array Duplicates

const cars = [
    'Mazda', 
    'Ford', 
    'Renault', 
    'Opel', 
    'Mazda'
]


const unique = cars.filter((car, idx) => cars.indexOf(car) === idx);
console.log(unique); // outputs ['Mazda', 'Ford', 'Renault', 'Opel']


// EX 2) Finding Object Duplicates

const names = [{
   name: 'John',
   surname: 'Doe'
}, {
   name: 'Muhamed',
   surname: 'Ali'
}, {
   name: 'Mike',
   surname: 'Tyson'
}, {
   name: 'John',
   surname: 'Doe'
}, {
   name: 'John',
   surname: 'Doe'
}, {
   name: 'Mike',
   surname: 'Tyson'
}, {
   name: 'Mike',
   surname: 'Tyson'
}];


// EX 2.1) The Longer Version

	const findDuplicates = (source) => {
	    const keys = Object.keys(source[0]);
	    let unique = [], duplicates = [];

	    source.forEach((item, idx) => {
	        
	        if(idx == 0) {
	            unique.push(item);
	            return;
	        };

	        const resultItem = unique.find(resultItem => {
	            let notFound = true;

	            keys.forEach(key => {
	                notFound = notFound && 
	                    item[key] != resultItem[key];
	            });

	            return !notFound;
	        });

	        (!resultItem ? unique : duplicates).push(item);

	    });

	    return { unique: unique, duplicates: duplicates };
	};

	const result = findDuplicates(names);
	console.log(result.unique, result.duplicates);

	// expected output

	// unique items

	// 0: {name: "John", surname: "Doe"}
	// 1: {name: "Muhamed", surname: "Ali"}
	// 2: {name: "Mike", surname: "Tyson"}

	// duplicate items

	// 0: {name: "John", surname: "Doe"}
	// 1: {name: "John", surname: "Doe"}
	// 2: {name: "Mike", surname: "Tyson"}
	// 3: {name: "Mike", surname: "Tyson"}


// EX 2.2) The Shorter Version

	const findDuplicates = (source) => {
	    const keys = Object.keys(source[0]);
	    return source.reduce((acc, item) => {
	        const resultItem = acc.unique.find(x => {
	            let notFound = true;

	            keys.forEach(key => {
	                notFound = notFound && 
	                    item[key] != x[key];
	            });

	            return !notFound;
	        });

	        (!resultItem ? acc.unique : acc.duplicates).push(item);
	        return acc;
	    }, {
	        unique: [],
	        duplicates: []
	    })
	};

	// unique items

	// 0: {name: "John", surname: "Doe"}
	// 1: {name: "Muhamed", surname: "Ali"}
	// 2: {name: "Mike", surname: "Tyson"}

	// duplicate items

	// 0: {name: "John", surname: "Doe"}
	// 1: {name: "John", surname: "Doe"}
	// 2: {name: "Mike", surname: "Tyson"}
	// 3: {name: "Mike", surname: "Tyson"}



