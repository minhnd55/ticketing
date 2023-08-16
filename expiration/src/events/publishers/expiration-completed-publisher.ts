import {
    ExpirationCompletedEvent,
    Publisher,
    Subjects
} from '@learning-tickets/common';

export class ExpirationCompletedPublisher extends Publisher<ExpirationCompletedEvent> {
    readonly subject = Subjects.ExpirationCompleted;
}
