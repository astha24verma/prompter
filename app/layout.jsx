import '@/styles/globals.css';

import Nav from "@/components/Nav";
import Provider from "@/components/Provider";

export const metadata = {
    title: "Prompter",
    descrtipion: "AI prompt sharing tool - descover and share AI prompts",
};

const RootLayout = ({ children }) => (
    <html lang='en'>
        <body>
            <Provider>
                <div className='main'>
                    <div className='gradient' />
                </div>

                <main className='app'>
                    <Nav />
                    {children}
                </main>
            </Provider>
        </body>
    </html>
);

export default RootLayout;