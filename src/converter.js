import excelToJson from 'convert-excel-to-json';
 
const result = excelToJson({
    sourceFile: './data/data.xlsx',
    columnToKey: {
        A: 'id',
        B: 'firstName',
        C: 'lastName',
        D: 'startDate',
        E: 'endDate',
        F: 'restId',
        G: 'restName',
    }
});

const resultJson = result['Лист1']

console.log(resultJson)

export default resultJson;
