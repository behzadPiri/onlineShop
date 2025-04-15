export const numberFormatters=(num: number | string): string =>{
    const en = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return en.replace(/\d/g, (d: string) => '۰۱۲۳۴۵۶۷۸۹'[parseInt(d)]);
}
