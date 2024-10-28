import MsgFromWebsite from '@/emails/MsgFromWebsite';
import ThankYouForSubscribing from '@/emails/WeReceivedYourEmail';
import WeReceivedYourMsg from '@/emails/WeReceivedYourMsg';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    // get request body
    try {
        const body = await request.json();

        if(Object.keys(body).length > 1){
                const { name, email, message } = body
                // save email and name to db
                //
                // send welcome email using email from body
                await resend.emails.send({
                    from: 'Deutchkleen <sales@deutchkleen.com>',
                    to: [email],
                    subject: 'Deutchkleeen Team',
                    react: WeReceivedYourMsg()
                });

                const data  = await resend.emails.send({
                from: 'Deutchkleen <sales@deutchkleen.com>',
                to: ['deutchkleenindnigerialimited@gmail.com'],
                subject: 'Deutchkleeen Team',
                react: MsgFromWebsite({ name: name, email: email, message: message}) 
                });



                return NextResponse.json(data);
        } else {
            const { email } = body
            // save email and name to db
    
            // send confirmation email
            const data = await resend.emails.send({
            from: 'Deutchkleen <sales@deutchkleen.com>',
            to: [email],
            subject: 'Deutchkleeen Team',
            react: ThankYouForSubscribing()
            });
                    
            return NextResponse.json(data);
        }    
    } catch (error) {
        return NextResponse.json({ error })
    }
    
}