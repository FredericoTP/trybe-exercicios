interface Notificator {
  sendNotification(message: string): void;
}

class ConsoleNotification implements Notificator {
  constructor(private name: string) { }

  sendNotification(message: string): void {
    console.log(`Here we go again! - ${message} from ${this.name}`)
  }
}

export default class ReadingTracker {
  private readingGoal: number;
  private booksRead: number;
  // O construtor deixa de instanciar um novo objeto do tipo Notificator
  // e agora passa a receber ele como parâmetro
  constructor(
    readingGoal: number,
    public notificator: Notificator = new ConsoleNotification('console'),
  ) {
    this.readingGoal = readingGoal;
    this.booksRead = 0;
  }

  trackReadings(readsCount: number): void {
    this.booksRead += readsCount;
    if (this.booksRead >= this.readingGoal) {
      this.notificator.sendNotification(
        'Congratulations! You\'ve reached your reading goal!',
      );
      return;
    }
    this.notificator.sendNotification('There are still some books to go!');
  }
}