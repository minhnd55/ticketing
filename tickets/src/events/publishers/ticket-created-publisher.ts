import {
    Publisher,
    Subjects,
    TicketCreatedEvent
} from '@learning-tickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    readonly subject = Subjects.TicketCreated;
}
