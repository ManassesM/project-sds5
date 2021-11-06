import { Seller } from './seller'

export type Sale = {
	id: number
	visited: number
	deals: number
	amount: number
	date: string
	seller: Seller
}

export type SalePage = {
	content?: Sale[]
	sizes?: number
	numberOfElements?: number
	empty?: boolean
	last: boolean
	totalElements: number
	totalPages: number
	number: number
	first: boolean
}

export type SaleSum = {
	sellerName: string
	sum: number
}

export type SaleSuccess = {
	sellerName: string
	visited: number
	deals: number
}
