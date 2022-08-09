import { Component, OnInit } from "@angular/core"
import { Servico } from "./servico"

@Component({
    selector: 'app-servico-list',
    templateUrl:  './servico-list.component.html'
})

export class ServicoListComponent implements OnInit {
    servicos: Servico[] = [];

    ngOnInit(): void {
        this.servicos = [
            {
                id: 1,
                name: 'Banho',
                preco: 80,
                duracao: 1,
            },
            {
                id: 2,
                name: 'Tosa',
                preco: 100,
                duracao: 1,
            },
            {
                id: 3,
                name: 'Higienização Bucal',
                preco: 40,
                duracao: 1,
            }
        ]
    }


}