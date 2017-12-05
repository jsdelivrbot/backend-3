import request from 'request';
import db, { MODE_TEST } from './helpers/db';

export const getTeam = (id) => {
  return new Promise((resolve, reject) => {
    db.get().query(`SELECT * FROM Meet`, (err, rows) => {
    		if (err) {
          console.log(err);
          reject({
    				code: 'some_unique_code',
    				message: 'some error message'
    			});
    		}
        resolve(rows);
    });
  }
};

// export default async () => {
// 	return new Promise((resolve, reject) => {
//     console.log("Starting");
// 		insertTeam("df");
// 		if (err) {
//       console.log(err);
// 			reject({
// 				code: 'some_unique_code',
// 				message: 'some error message'
// 			});
// 		}
// 		resolve([ /* Array of teams */ ]);
// 	})
// }

db.connect(MODE_TEST, async () => {
  await getTeam("Duke");
  db.disconnect();
});