import {
    Publisher,
    Subjects,
    TicketUpdatedEvent
} from '@learning-tickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    readonly subject = Subjects.TicketUpdated;
}
