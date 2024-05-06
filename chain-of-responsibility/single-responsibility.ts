
/**
 * Bad approach
 * Here we are calling sendMail from Email service in Order Service
 */
class OrderService {
    constructor(private emailService: EmailService) {
    }
    placeOrder(items: string[]): void {
        console.log("Order Placing...");
        this.emailService.sendEmail("pmore7006@gmail.com");
    }
}

class EmailService {
    sendEmail(sender: string): void {
        console.log("Sending Email...")
    }
}


/**
 * Good approach
 * Instead calling in Order Service, we can just call this controller
 */


class OrderService {
    constructor() {
    }
    placeOrder(items: number[]): void {
        console.log("Order Placing...");
    }
}

class EmailService {
    sendEmail(sender: string): void {
        console.log("Sending Email...")
    }
}


function placeAOrderController() {
    const orderService = new OrderService();
    orderService.placeOrder([1,1,2,3,4]);
    /**
     * Send mail here
     */
    const emailService = new EmailService();
    emailService.sendEmail("pmore7006@gmail.com");
}