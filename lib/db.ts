import mysql from 'serverless-mysql'

const db = mysql({
  config: {
    host: '127.0.0.1',
    port: 3306,
    database: 'kondangan',
    user: 'root',
    password: ''
  }
});

export default async function excuteQuery(query: string) {
  try {
    const results = await db.query(query);
    await db.end();
    return results;
  } catch (error: any) {
    console.log(error)
    return { error };
  }
}