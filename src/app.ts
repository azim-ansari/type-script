import express, { Application, Request, Response, NextFunction } from 'express'

const app: Application = express()

const add = (a: number, b: number): number => a + b
app.get('/get', (req: Request, res: Response, next: NextFunction) => {
	console.log(add(10, 20))
	res.send('server is running on local host')
})

app.listen(3000, () => {
	console.log('server running')
})
