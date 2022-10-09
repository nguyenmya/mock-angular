import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root'

})
export class MockService {
    search: string = '';
    listData: any = [];
    indexTab: number = 0;

    constructor(private http: HttpClient) { }
    getAllProducts(): Observable<any> {
        const url = 'https://utc2ranking.azurewebsites.net/api/Product'
        return this.http.get(url)
    }
    getProductDetail(id: any): Observable<any> {
        const url = `https://utc2ranking.azurewebsites.net/api/Product/GetById?id=${id}`
        return this.http.get(url)
    }
    getSearchProducts(value: any): Observable<any> {
        const url = `https://utc2ranking.azurewebsites.net/api/Product/Search?keysearch=${value.search}`
        return this.http.get(url, value.search)
    }
    getSearchProductsVintage(value: string): Observable<any> {
        const url = `https://utc2ranking.azurewebsites.net/api/Product/Category?category=${value}`;
        return this.http.get(url);
    }

    SearchData(value: string) {
        this.search = value
    }
    getAllData() {
        this.getAllProducts().subscribe((res) => {
            this.listData = res;
        });
    }
    onSubmitForm(value: any) {
        this.getSearchProducts(value).subscribe((res) => {
            this.listData = res;
        });
    }

    onSubmitFormVintage(search: string, indexTab: number) {
        this.indexTab = indexTab;
        this.getSearchProductsVintage(search).subscribe((res) => {
            this.listData = res;
        });
    }
}