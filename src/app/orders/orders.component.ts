import { ViewChild } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import swal from 'sweetalert2';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
    public modalReference: NgbModalRef | undefined;
    @ViewChild('ordersModal')
    ordersModal!: TemplateRef<any>;

    customer_name: any = undefined;
    due_date: any = undefined;
    customer_address: any = undefined;
    ph_no: any = undefined;
    order_total: any = undefined;
    addOrderFlag: boolean = true;
    

    orders: any = [
        { "order_no": 123456, "due_date": "2022-04-06", "customer_name": "Deepali Badi", "customer_address": "Gachibowli, Hyderabad", "ph_no": 9876599210, "order_total": 12000 },
        { "order_no": 123457, "due_date": "2022-04-11", "customer_name": "Deepali Badi", "customer_address": "LB Nagar, Hyderabad", "ph_no": 9876555211, "order_total": 436000 },
        { "order_no": 123458, "due_date": "2022-04-12", "customer_name": "Deepali Badi", "customer_address": "Gachibowli, Hyderabad", "ph_no": 9836522212, "order_total": 981000 },
        { "order_no": 123459, "due_date": "2022-04-01", "customer_name": "Deepali Badi", "customer_address": "Gachibowli, Hyderabad", "ph_no": 9846511213, "order_total": 65000 },
        { "order_no": 123460, "due_date": "2022-04-30", "customer_name": "Deepali Badi", "customer_address": "Gachibowli, Hyderabad", "ph_no": 9886500214, "order_total": 560000 },
        { "order_no": 123461, "due_date": "2022-04-16", "customer_name": "Deepali Badi", "customer_address": "Gachibowli, Hyderabad", "ph_no": 9816500215, "order_total": 24000 },
    ];
    order_no: any;
    constructor(private modal: NgbModal,
        private toastr: ToastrService,
    ) { }
    addOrders() {
        this.addOrderFlag = true;

        this.modalReference = this.modal.open(this.ordersModal, { size: 'lg', backdrop: 'static', keyboard: false });
    }
    editOrders(order: any) {
        this.addOrderFlag = false;

        this.order_no = order.order_no;
        this.due_date = order.due_date;
        this.customer_address = order.customer_address;
        this.customer_name = order.customer_name;
        this.ph_no = order.ph_no;
        this.order_total = order.order_total;
        this.modalReference = this.modal.open(this.ordersModal, { size: 'lg', backdrop: 'static', keyboard: false });
    }
    submitOrder() {
        const current = new Date();
        const timestamp = current.getTime();

        let finalData = {
            order_no: timestamp,
            due_date: this.due_date,
            customer_name: this.customer_name,
            customer_address: this.customer_address,
            ph_no: this.ph_no,
            order_total:this.order_total
        }
        this.orders.push(finalData);
        this.toastr.success("Successfully Added Your Order.")
        this.closeModal();
    }
    closeModal(): void {
        this.modalReference?.close();
        this.due_date = undefined;
        this.customer_address = undefined;
        this.customer_name = undefined;
        this.ph_no = undefined;
        this.order_total = undefined;
        this.order_no = undefined;
    }
    deleteOrder(Order: any) {
        for (let order of this.orders) {
            if (order.order_no === Order.order_no) {
                swal.fire({
                    title: 'Are you sure?',
                    text: 'You won\'t be able revert this action!',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, delete it!',
                    cancelButtonText: 'No, cancel!',
                    reverseButtons: true
                }).then((result) => {
                    if (result.isConfirmed) {
                        const index = this.orders.indexOf(order);
                        this.orders.splice(index, 1);
                        this.toastr.success("Successfully Deleted the Order.")
                    } else if (
                        result.dismiss === swal.DismissReason.cancel
                    ) {
                    }
                });
            }
        }
        this.closeModal();
    }
    editOrderData() {
        for (let order of this.orders) {
            if (order.order_no === this.order_no) {
                order.due_date = this.due_date;
                order.customer_name = this.customer_name;
                order.customer_address = this.customer_address;
                order.ph_no = this.ph_no;
                order.order_total = this.order_total;
            }

        }
        this.toastr.success("Successfully Modified Your Order.")
        this.closeModal();
    }
    ngOnInit(): void {
       
  }

}

