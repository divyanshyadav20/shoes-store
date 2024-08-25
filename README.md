This is a shoes e-commerce store built using [Next.js](https://nextjs.org/) app router.

The website is deployed on Vercel and you can check it out here -> https://shoes-store-snowy-ten.vercel.app/

**Performance Benchmarks**

![The lighthouse scores for the website.](/public/lightout-shoes.png)

**Preview**

![Landing page preview](/public/landing.png)

## Tech stack used

- **NextJS**
- **React**
- **Typescript**
- **TailwindCSS**
- **Shadcn**
- **Framer motion**
- **Zustand**
- **React-hook-form**
- **Zod**
- **Jest**
- **React testing library**

## About

The website covers all the necessary steps of the assessment. I have taken the liberty of not using a database and instead using static in-memory data for the list of items. It is responsive as well.

_Discounts - Every 3rd order will get a discount code to avail 10% discount. The user will see an info banner on the `/checkout` page if the above condition satisfies._

Following are the pages in this website:

- `/`: This is the home/landing page. I have added some framer motion animations to make it look exciting.

- `/shop`: The user can see a list of all the items on this page.

- `/shop/{productId}`: This page is generated using _SSG_ at build time for faster load time. It's the product detail pages that let you add your product to the cart while displaying info regarding the same. They also display four random products as related products in it.

- `/checkout`: It's the checkout page, with a form to fill the necessary details corresponding to the order. It also displays the info regarding the order itself.

- `/admin`: A page where you can see the info regarding the orders placed, discounts applied etc.

All the pages are server rendered and a few of them use client side rendered components. I am using `zustand` for state management and the data is preserved on refresh in the `local-storage`.

## Development

I have developed the entire thing by doing iterative changes over time. Each change is merged with a PR after successful build using the `rebase` strategy.

## Running the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running the tests

```bash
npm run test
```

Run the above command in the terminal to run the test across various components.
