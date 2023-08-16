import {
    PaymentCreatedEvent,
    Publisher,
    Subjects
} from '@learning-tickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
    readonly subject = Subjects.PaymentCreated;
}
