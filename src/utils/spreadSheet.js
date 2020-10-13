import { GoogleSpreadsheet } from "google-spreadsheet";
import config from './config';

const CLIENT_EMAIL = config.APP_GOOGLE_CLIENT_EMAIL;
const PRIVATE_KEY = config.APP_GOOGLE_SERVICE_PRIVATE_KEY;
const SPREADSHEET_ID = config.APP_SPREADSHEET_ID;
const CONTACT_SHEET_ID = config.APP_CONTACT_SHEET_ID;
const CAREER_SHEET_ID = config.APP_CAREER_SHEET_ID;
const PRODUCT_SHEET_ID = config.APP_PRODUCT_SHEET_ID

export const addRow = async (row) => {
  try {
    const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
    await doc.useServiceAccountAuth({
      client_email: CLIENT_EMAIL,
      private_key: PRIVATE_KEY,
    });
    await doc.loadInfo();
    
    const sheet = doc.sheetsById[CONTACT_SHEET_ID];
    await sheet.addRows(row);
    const larryRow = await sheet.addRow({ name: 'Larry Page', email: 'larry@google.com' });
    const moreRows = await sheet.addRows([
      { name: 'Sergey Brin', email: 'sergey@google.com' },
      { name: 'Eric Schmidt', email: 'eric@google.com' },
    ]);

    const rows = await sheet.getRows(); // can pass in { limit, offset }

    console.log("rows", rows); // 'Larry Page'
    // rows[1].email = 'sergey@abc.xyz'; // update a value
    // await rows[1].save(); // save updates
    // await rows[1].delete(); // delete a row

  } catch (e) {
    console.error('Error: ', e);
  }
};

export const getProduct = async () => {
  try{
    const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
    await doc.useServiceAccountAuth({
      client_email: CLIENT_EMAIL,
      private_key: PRIVATE_KEY
    });

    await doc.loadInfo();
    const sheet = doc.sheetsById[PRODUCT_SHEET_ID];
    
    const products = await sheet.getRows();
    return products;
  }catch(e){
    console.error("Error Google Spreadsheet", e);
  }
}

export const addInfoContact = async (data) => {
  try{
    const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
    await doc.useServiceAccountAuth({
      client_email: CLIENT_EMAIL,
      private_key: PRIVATE_KEY
    });
    await doc.loadInfo();

    const sheet = doc.sheetsById[CONTACT_SHEET_ID];
    await sheet.addRows(data);
    const rows = await sheet.getRows();
  }catch(e){
    console.error("Error Google Spreadsheet", e);
  }
}

export const addInfoCareer = async (data) => {
  try{
    const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
    await doc.useServiceAccountAuth({
      client_email: CLIENT_EMAIL,
      private_key: PRIVATE_KEY
    });

    await doc.loadInfo();
    const sheet = doc.sheetsById[CAREER_SHEET_ID];
    await sheet.addRows(data);
  }catch(e){
    console.error("Error Google Spreadsheet", e);
  }
}