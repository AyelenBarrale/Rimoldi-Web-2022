import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<any> {
      if (Document.getInitialProps) {
        const initialProps = await Document.getInitialProps(ctx)
  
        return { ...initialProps }
      }
    }
  
  
    render(): any {
      return (
        <Html lang="en">
          <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta name="author" content="Ayelen Barrale. Web Development" />
            <link rel="preload" href="/assets/fonts/Inter-Black.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
            <link rel="preload" href="/assets/fonts/Inter-Bold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
            <link rel="preload" href="/assets/fonts/Inter-ExtraBold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
            <link rel="preload" href="/assets/fonts/Inter-Extralight.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
            <link rel="preload" href="/assets/fonts/Inter-Light.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
            <link rel="preload" href="/assets/fonts/Inter-Medium.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
            <link rel="preload" href="/assets/fonts/Inter-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
            <link rel="preload" href="/assets/fonts/Inter-SemiBold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
            <link rel="preload" href="/assets/fonts/Inter-Thin.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
            <meta name="copyright" content="Rimoldi Santiago 2022"/>
            <meta name="keywords" content="graphic designer, photo manipulation portfolio, branding design, graphic design, photoshop artist"/>
            <meta name="description" content="Graphic design portfolio where you can check out Santiago's latest works and works in progress. This portfolio specializes in photo manipulation and branding."/>
            <meta property= "og-title" content="Rimoldi's Graphic Design"/>
            <meta property= "og-description" content="Graphic Designer especialize in Photo Manipulation and Branding Design. Check out his latest works."/>
            {/* <meta property= "og-image" content= "././img/Portada_About_Rimoldi_Design.jpg" />  */}
            <meta property= "og-url" content= "https://santiagorimoldi.com" />
            <meta property= "og-type" content= "website" />
            <meta property= "og-locale" content= "en_EN" />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      )
    }
  }
  
  export default MyDocument