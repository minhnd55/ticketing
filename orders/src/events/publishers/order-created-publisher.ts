import {
    OrderCreatedEvent,
    Publisher,
    Subjects
} from '@learning-tickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    readonly subject = Subjects.OrderCreated;
}
