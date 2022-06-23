export interface Fund {
    name: string;
    netValue: number;
    code: string;
    data?: FundData[];
}

export interface FundData {
    date: number;
    amount: number;
    state: 'instock' | 'sold';
    currentProfit: number;
    netValue: number;
}