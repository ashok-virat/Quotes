import{Injectable} from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs'
import { ActivatedRoute, Router } from '@angular/router';
@Injectable()
export class QuoteService{

    public jokes=[
            {
                id:1,
            quote:'Everything is changing. People are taking their comedians seriously and the politicians as a joke.',
            author:'Will Rogers'
        },
        {
            id:2,
            quote:'Everybody I know who is funny, its in them. You can teach timing, or some people are able to tell a joke, though I dont like to tell jokes. But I think you have to be born with a sense of humor and a sense of timing.',
            author:'carol Burnett'
        },
        {
            id:3,
            quote:'There is always something funny going on between scenes with Adam Sandler. Hes always cracking jokes and yelling at people for no reason. Its pretty funny. He will joke around during scenes, too. When he guest-starred on Jessie, there was nothing in the script that he said first take',
            author:'Ramsey'
        },
        {
            id:4,
            quote:"It took me years to realize that 'normal' is actually super boring and that being myself was harder but infinitely more rewarding.",
            author:'Ramsey'
        },
        {
            id:5,
            quote:"I'm just really excited to expose people to different identities, different conversations but also to kind of reframe how they think about black women just by being myself.",
            author:'Ramsey'
        },
        {
            id:6,
            quote:"You have to realize that people are always going to be confused or sometimes threatened by someone who has the confidence to do something different",
            author:'Ramsey'
        },
        {
            id:7,
            quote:"Self-esteem doesn't have to just be about the way you look; it can be about your talents and passions. All of those things can build someone's confidence and show them that they have self worth and they are important.",
            author:'Ramsey'
        },
        {
            id:8,
            quote:"The truth is that the performative nature of social media can turn even the simplest conversations into a WWE style cage match with emojis and Internet slang taking the place of pratfalls and over the top costumes",
            author:'Ramsey'
        },
        {
            id:9,
            quote:"For whatever reason, illiteracy continues to plague the racist troll community.",
            author:'Ramsey'
        },
        {
            id:10,
            quote:"Everyone's journey is their own journey. Everyone gets to where they are supposed to be. Everyone's journey works out the way they're supposed to.",
            author:'Ramsey'
        },
        {
            id:11,
            quote:"Black people come in so many different bodies, genders, and sexualities, so it's important that we're conscious of that so we can fight for a world that embraces and uplifts black people of every kind. Our voices are powerful and have the ability to make change.",
            author:'Ramsey'
        }
    ]
   public Motivation=[
    {
        quote:"Today I choose life. Every morning when I wake up I can choose joy, happiness, negativity, pain... To feel the freedom that comes from being able to continue to make mistakes and choices - today I choose to feel life, not to deny my humanity but embrace it.",
        author:'Aucoin'
    },
    {
        quote:"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.",
        author:'steve jobs'
    },
    {
        quote:"I will love the light for it shows me the way, yet I will endure the darkness because it shows me the stars",
        author:'og mandino'
    },
    {
        quote:"It took me years to realize that 'normal' is actually super boring and that being myself was harder but infinitely more rewarding.",
        author:'Ramsey'
    },
    {
        quote:"Happiness is not something you postpone for the future; it is something you design for the present.",
        author:'jim Rohn'
    },
    {
        quote:"If a man does not keep pace with his companions, perhaps it is because he hears a different drummer. Let him step to the music which he hears, however measured or far away",
        author:'Hentry'
    },
    {
        quote:"Change your thoughts and you change your world.",
        author:'Norman'
    },
    {
        quote:"If you always put limit on everything you do, physical or anything else. It will spread into your work and into your life. There are no limits. There are only plateaus, and you must not stay there, you must go beyond them.",
        author:'Bruce lee'
    },
    {
        quote:"Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared",
        author:'Buddha'
    },
    {
        quote:"Your personal life, your professional life, and your creative life are all intertwined. I went through a few very difficult years where I felt like a failure. But it was actually really important for me to go through that. Struggle, for me, is the most inspirational thing in the world at the end of the day - as long as you treat it that way.",
        author:'Skyler grey'
    },
    {
        quote:"Keep your face always toward the sunshine - and shadows will fall behind you.",
        author:'walt whitman'
    }
   ]
   public love=[
    {
        quote:"Infuse your life with action. Don't wait for it to happen. Make it happen. Make your own future. Make your own hope. Make your own love. And whatever your beliefs, honor your creator, not by passively waiting for grace to come down from upon high, but by doing what you can to make grace happen... yourself, right now, right down here on Earth.",
        author:'Whiteford'
    },
    {
        quote:"A lovely nook of forest scenery, or a grand rock, like a beautiful woman, depends for much of its attractiveness upon the attendance sense of freedom from whatever is low; upon a sense of purity and of romance.",
        author:'P.T.Barnum'
    },
    {
        quote:"The lust and attraction are often a given in a romance novel - I want to dig into the elements of true friendship that form a foundation for a solid, gonna-last-forever romantic relationship.",
        author:'Brockmann'
    },
    {
        quote:"I think it's wonderful when a love story begins with a great deal of romance and affection, passion and excitement, that's how it should be. But I don't necessarily know that it's the wisest thing in the world to expect that it ends there, or that it should, 30 years down the road, still look as it did on the night of your first kiss.",
        author:'Elizebeth Gillbet'
    },
    {
        quote:"Vulnerability is the essence of romance. It's the art of being uncalculated, the willingness to look foolish, the courage to say, 'This is me, and I'm interested in you enough to show you my flaws with the hope that you may embrace me for all that I am but, more important, all that I am not",
        author:'Aushton kutcher'
    },
    {
        quote:"I went from elementary school to proper training, operatic training, and I went on to the Motown University and learned a lot of things from some wonderful people",
        author:'Martha Ravees'
    },
    {
        quote:"If you stick around long enough, people start referring to you as a survivor. Suddenly I found myself on the receiving end of several prestigious awards",
        author:'Martha Ravees'
    },
    {
        quote:"Infuse your life with action. Don't wait for it to happen. Make it happen. Make your own future. Make your own hope. Make your own love. And whatever your beliefs, honor your creator, not by passively waiting for grace to come down from upon high, but by doing what you can to make grace happen... yourself, right now, right down here on Earth",
        author:'Bhradley Whiteford'
    },
    {
        quote:"Love myself I do. Not everything, but I love the good as well as the bad. I love my crazy lifestyle, and I love my hard discipline. I love my freedom of speech and the way my eyes get dark when I'm tired. I love that I have learned to trust people with my heart, even if it will get broken. I am proud of everything that I am and will become.",
        author:'Jhonny weir'
    },
    {
        quote:"Being a father has been, without a doubt, my greatest source of achievement, pride and inspiration. Fatherhood has taught me about unconditional love, reinforced the importance of giving back and taught me how to be a better person",
        author:'Naveen jein'
    },
    {
        quote:"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.",
        author:'Steve jobs'
    }
   ]
    currentblog: { id: number; quote: string; author: string; };
    last: number;
    constructor(public http:HttpClient,public route:Router){

    }
    public getRandomQuote(){
       return this.jokes;
    }

    public setJokes(category,data){
        if(category==='jokes'){
            this.last=this.jokes.length;
            let newdata={
                id:this.last+1,
                quote:data.quote,
                author:data.author,
            }
        this.jokes.push(newdata)
        setTimeout(()=>{
            this.route.navigate(["/home",'jokes'])
          },2000)
        }
        if(category==='love'){
            this.love.push(data)
            setTimeout(()=>{
                this.route.navigate(["/love",'love'])
              },2000)
            }
        if(category==='Motivation'){
                this.Motivation.push(data)
                setTimeout(()=>{
                    this.route.navigate(["/motivation",'category'])
                  },2000)
                }
    }
    public getmotivation(){
        return this.Motivation;
    }

    
    public getlove(){
        return this.love;
    }
    public editquote(blogid){
        console.log('edit blog is called')
        console.log(blogid)
        for(let quote of this.jokes){
            console.log(quote)
            if(blogid == quote.id){
                  this.currentblog=quote;
                  
                  return this.currentblog;
                
            }
        }
    }
}