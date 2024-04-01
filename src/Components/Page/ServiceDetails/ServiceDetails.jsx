import ppc from "../../../assets/PPC-Management.jpeg";
import Logic from "../../../assets/Premium.jpeg";
import work from '../../../assets/Workspace.jpeg';
import marcel from "../../../assets/Marcel.jpeg"

export default function ServiceDetails() {
  return (
    <div className=" mt-[10px]">
      <h3 className="text-center my-10 text-3xl">What we do provide our Client</h3>
      <p className="text-center max-w-[600px] mx-auto px-8 md:px-0 font-semibold">
        By partnering with Deed Bangladesh, you will have access to one of the largest and most
        experienced teams focusing on Amazon supporting brands in all categories and all sizes.
      </p>

      <div className="mt-10 my-10 md:px-10">
        <div className="md:grid md:grid-cols-2 gap-10 px-10">
          <div className="my-10">
            <div className="img w-[100px] h-[100px] ">
              <img
                src=" https://uploads-ssl.webflow.com/632ae3c1946ddb2ff81123b0/643459fcab4f87dfbc5bc39a_PPC.webp"
                alt="logo"
              />
            </div>
            <h3 className="text-xl font-bold my-3">
              Amazon Advertising By Your Dedicated <br /> PPC Expert{" "}
            </h3>
            <p className="my-5 md:w-[600px] tex-xl leading-[24px] font-semibold">
              With over $5 million in managed Amazon ad sales, our team provides you with strategies
              to grow your share of voice, scale your revenue, and reduce ACoS.
            </p>
            {/* li */}
            <ul className="grid grid-cols-3 gap-8 mb-5">
              <li className="border rounded-2xl h-[40px] text-center py-2 hover:text-accent hover:shadow-xl">
                Profibility
              </li>
              <li className="border rounded-2xl h-[40px] text-center py-2 hover:text-accent hover:shadow-xl">
                Awareness
              </li>
              <li className="border rounded-2xl h-[40px] text-center py-2 hover:text-accent hover:shadow-xl">
                Growth
              </li>
              <li className="border rounded-2xl h-[40px] text-center py-2 hover:text-accent hover:shadow-xl">
                Landing Pages
              </li>
              <li className="border rounded-2xl h-[40px] text-center py-2 hover:text-accent hover:shadow-xl">
                E-Commerce
              </li>
            </ul>
          </div>
          {/* right */}
          <div className="my-10 h-[500px]">
            <img className="h-full w-full rounded-2xl" src={ppc} alt="logo" />
          </div>
        </div>

        {/* 2nd row*/}
        <div className="md:grid md:grid-cols-2 gap-10 px-10">
          <div className="my-10 h-[500px]">
            <img className="h-full w-full rounded-2xl" src={marcel} alt="logo" />
          </div>

          <div className="my-10">
            <div className="img w-[100px] h-[100px] ">
              <img
                src="https://uploads-ssl.webflow.com/632ae3c1946ddb2ff81123b0/643459fcab4f876e6e5bc3a3_SEO.webp"
                alt="logo"
              />
            </div>
            <h3 className="text-xl font-bold my-3">Everything you need for awesome Content </h3>
            <p className="my-5 md:w-[600px] tex-xl leading-[24px] font-semibold">
              From infographics, A+ content and videos to bullet points, Storefronts and back end
              search terms, there are multiple opportunities to impress your customers with your
              product offerings.
            </p>
            {/* li */}
            <ul className="grid grid-cols-3 gap-8 mb-5">
              <li className="border rounded-2xl h-[40px] text-center py-2 hover:text-accent hover:shadow-xl">
                Infographics
              </li>
              <li className="border rounded-2xl h-[40px] text-center py-2 hover:text-accent hover:shadow-xl">
                A+ Graphics
              </li>
              <li className="border rounded-2xl h-[40px] text-center py-2 hover:text-accent hover:shadow-xl">
                Storefront Design
              </li>
              <li className="border rounded-2xl h-[40px] text-center py-2 hover:text-accent hover:shadow-xl">
                Copywriting &SEO
              </li>
            </ul>
          </div>
          {/* right */}
        </div>
        {/* 3rd row */}
        <div className="md:grid md:grid-cols-2 gap-10 px-10">
          <div className="my-10">
            <div className="img w-[100px] h-[100px] ">
              <img
                src="https://uploads-ssl.webflow.com/632ae3c1946ddb2ff81123b0/643459fcab4f87e93d5bc397_Technical%20Support.webp"
                alt="logo"
              />
            </div>
            <h3 className="text-xl font-bold my-3">Enhancing Amazon Seller Support</h3>
            <p className="my-5 md:w-[600px] tex-xl leading-[24px] font-semibold">
              Our team of specialists, including ex-Amazon Seller Support associates, provide
              enhanced assistance for everything from problems with suspensions and matching errors,
              to FBA prime set-up, brand registry and barcode support. Our team help with those
              tricky bits you need help with on Amazon to focus on selling.
            </p>
            {/* li */}
            <ul className="grid grid-cols-3 gap-8 mb-5">
              <li className="border rounded-2xl h-[40px] text-center py-2 hover:text-accent hover:shadow-xl">
                Brand Registry
              </li>
              <li className="border rounded-2xl h-[40px] text-center py-2 hover:text-accent hover:shadow-xl">
                Suppression
              </li>
              <li className="border rounded-2xl h-[40px] text-center py-2 hover:text-accent hover:shadow-xl">
                Suspensions
              </li>
              <li className="border rounded-2xl h-[40px] text-center py-2 hover:text-accent hover:shadow-xl">
                Listing Uploads
              </li>
              <li className="border rounded-2xl h-[40px] text-center py-2 hover:text-accent hover:shadow-xl">
                Account Health
              </li>
              <li className="border rounded-2xl h-[40px] text-center py-2 hover:text-accent hover:shadow-xl">
                Performance
              </li>
            </ul>
          </div>
          {/* right */}
          <div className="my-10 h-[500px]">
            <img className="h-full w-full rounded-2xl" src={work} alt="logo" />
          </div>
        </div>
        {/* 4th row */}
        <div className="md:grid md:grid-cols-2 gap-10 px-10">
          <div className="my-10 h-[500px] ">
            <img className="h-full w-full rounded-2xl" src={Logic} alt="logo" />
          </div>

          <div className="my-10">
            <div className="img w-[100px] h-[100px] ">
              <img
                src="https://uploads-ssl.webflow.com/632ae3c1946ddb2ff81123b0/643459fcab4f8761425bc3a0_Organize.webp"
                alt="logo"
              />
            </div>
            <h3 className="text-xl font-bold my-3">
              Logistics & Warehousing, Built for Amazon Selling{" "}
            </h3>
            <p className="my-5 md:w-[600px] tex-xl leading-[24px] font-semibold">
              Staying in stock and meeting Amazon’s complex FBA requirements can be a challenge. Our
              fully integrated 3PL service solves this.
            </p>
            {/* li */}
            <ul className="grid grid-cols-3 gap-8 mb-5">
              <li className="border rounded-2xl h-[40px] text-center py-2 hover:text-accent hover:shadow-xl">
                FBA Prep
              </li>
              <li className="border rounded-2xl h-[40px] text-center py-2 hover:text-accent hover:shadow-xl">
                Fulfilment
              </li>
              <li className="border rounded-2xl h-[40px] text-center py-2 hover:text-accent hover:shadow-xl">
                Shipping
              </li>
              <li className="border rounded-2xl h-[40px] text-center py-2 hover:text-accent hover:shadow-xl">
                Storage
              </li>
              <li className="border rounded-2xl h-[40px] text-center py-2 hover:text-accent hover:shadow-xl">
                Personalisation
              </li>
            </ul>
          </div>
          {/* right */}
        </div>
      </div>
    </div>
  );
}
