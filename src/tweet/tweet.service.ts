import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class TweetService {
    constructor(private readonly userService: UsersService) { }

    tweets: { text: string; date: Date; userId: number }[] = [
        { text: 'some tweet', date: new Date('2024-11-12'), userId: 1 },
        { text: 'some other tweet', date: new Date('2024-08-12'), userId: 2 },
        { text: 'some more tweet', date: new Date('2024-02-12'), userId: 3 },
    ];

    getTweet(userId: number) {
        const user = this.userService.getUserById(userId);

        const tweets = this.tweets.filter(t => t.userId === userId);

        return tweets.map(t => ({
            text: t.text,
            date: t.date,
            name: user?.name,
        }));
    }
}
