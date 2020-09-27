/*
  * Created By : Ankita Solace
  * Created Date : 26-09-2020
  * Purpose : Declare all mysql db operations,
*/


	// mysql insert query
	async function _insert( tabl, feilds, values,res, whereField ) {
			try {
				let query = "INSERT INTO "+tabl+" ( "+feilds +" ) VALUES ("+ values +")";
				await conn.query(query, async (er, result) => {
						 if (er)  return res.status(500).send(er);
						 else   {
							 let  where = result.insertId
							 await _select( result, tabl, res,"", where, whereField );
						 }
				 });
			} catch (e) {
					throw new Error( "_insert catch block: ", e);
			}
	}


	// myql data fetch query
	async function _select (  result, tabl, res, feilds,where, whereField,WhereCond  ) {
			try {
				let query = ""
				if( typeof feilds == "undefined" ||  feilds == "" || feilds == null ) feilds = " * "
				if( typeof WhereCond != "undefined")
						 query = " SELECT "+feilds+" from "+tabl+"  WHERE "+ WhereCond
				else
						 query = " SELECT "+feilds+" from "+tabl+"  WHERE "+ whereField+"  = "+where

						 conn.query(query, (err, result) => {
			 					if (err) {
			 						return res.status(500).send(err);
			 					} else   return res.status(200).send( result );
		 				});

			} catch (e) {
					throw new Error( "_insert catch block: ", e);
			}
	}


	// mysql update query
		async function _update( tabl, setFields, WhereCond, res  ) {
				try {
						let query = "UPDATE "+tabl+" SET " + setFields + " WHERE "+ WhereCond ;
						await conn.query(query, async (er, result) => {
			           if (er)  return res.status(500).send(er);
			 					else  await _select( result, tabl, res,"", "", "",WhereCond );
			       });

				} catch (e) {
					throw new Error( "_update catch block: ", e);
				}
		}

module.exports = { _insert, _update, _select }
