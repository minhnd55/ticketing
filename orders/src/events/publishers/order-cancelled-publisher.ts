import {
    OrderCancelledEvent,
    Publisher,
    Subjects
} from '@learning-tickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    readonly subject = Subjects.OrderCancelled;
}
