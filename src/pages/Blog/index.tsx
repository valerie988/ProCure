import { useState } from "react";
interface Article {
  title: string;
  content: string;
}
const articles: Record<string, Article> = {
  procurement: {
    title: "Why Procurement Matters in Organisations",
    content: `
<p>
In any organisation large or small, procurement sits at the heart of operational success. It is more than simply buying goods and services; it is a strategic function that ensures the right resources reach the right place, at the right time, and at the right cost. When procurement works well, projects move faster, budgets remain under control, and teams focus on what they do best. When it falters, delays multiply, costs rise, and inefficiencies quietly slow down growth. In today’s competitive environment, organisations can no longer afford fragmented purchasing practices or adhoc supplier engagement. A closer look at everyday business operations reveals just how central procurement truly is—leading us to five key reasons why this function matters.
</p>

<h3>Five Reasons Why Procurement Matters</h3>

<h4>1. Cost Control and Savings</h4>
<p>
Procurement helps organisations spend wisely by comparing suppliers, negotiating better terms, and preventing unnecessary purchases. For example, centralising stationery orders can reduce costs significantly compared to different departments buying independently.
</p>

<h4>2. Quality Assurance</h4>
<p>
Effective procurement ensures products and services meet required standards. A wellmanaged vendor selection process helps avoid poorquality items such as lowgrade IT accessories that fail within months, hence saving the organisation from repeated replacements.
</p>

<h4>3. Risk Mitigation</h4>
<p>
Procurement teams assess supplier reliability, financial stability, and compliance with regulations. For instance, verifying a vendor’s tax and registration documents protects an organisation from exposure to fraud or legal issues.
</p>

<h4>4. Operational Efficiency</h4>
<p>
Structured procurement processes prevent bottlenecks. With clear approval procedures and timely sourcing, organisations avoid project delays such as construction work halted because materials were ordered too late.
</p>

<h4>5. Strong Supplier Relationships</h4>
<p>
Procurement fosters longterm partnerships with trusted vendors. Good relationships ensure priority service, faster deliveries, and flexible payment terms benefit crucial for fast-moving operations or urgent requests
</p>
<p>
Together, these elements demonstrate that procurement is not merely transactional; it is a strategic driver of performance and value creation.
</p>

<h3>Why Organisations Need Dedicated Procurement Units</h3>

<p>
To enhance efficiency, organisations must establish dedicated procurement units with clear roles, standard procedures, and professional oversight. A specialised team ensures transparency, improves accountability, and streamlines purchasing activities ultimately enabling the organisation to operate with confidence, control, and longterm sustainability.
</p>
`,
  },

  tips: {
    title: "Simplifying Procurement: 5 Tips for Smoother Processes",
    content: `
<p>
In many organisations, procurement is often slowed down not by the lack of suppliers or resources, but by administrative bottlenecks that quietly accumulate over time. Lengthy approval chains, unclear specifications, inconsistent documentation, and fragmented communication between departments can turn simple purchases into prolonged processes. These inefficiencies drain staff time, delay project delivery, and increase operational costs, ultimately limiting an organisation’s agility in fastchanging environments. Yet, procurement doesn’t have to be complicated. With the right strategies, teams can transform these bottlenecks into streamlined workflows. This brings us to five practical tips organisations can implement immediately.
</p>

<h4>1. Standardise Documentation and Templates</h4>
<p>
Using uniform purchase request forms, bid evaluation templates, and vendor registration documents reduces backandforth clarifications. For example, many organisations waste hours correcting poorly completed forms simply because templates vary by department. Standardisation ensures clarity from the start
</p>

<h4>2. Centralise Supplier Information</h4>
<p>
A single, updated supplier database promotes transparency and eliminates duplicated efforts. Instead of repeatedly requesting the same tax documents or bank details, teams can rely on a central repository that tracks vendor performance, compliance status, and past transactions.
</p>

<h4>3. Automate Routine Tasks</h4>
<p>
<a>Automated workflows<a/> such as digital approval routing, etender platforms, or contract reminders significantly cut processing time. For instance, replacing manual email follow-ups with automated approval notifications helps avoid delays due to leave, workload, or oversight.
</p>

<h4>4. Improve Internal Communication</h4>
<p>
Many delays stem from teams not understanding each other’s needs. A simple monthly coordination meeting between procurement, finance, and user departments can clarify priorities, align expectations, and prevent lastminute emergencies.
</p>
<p>
Moreover, the Supply Chain unit can at the beginning of each financial year create a <a>Procurement Plan<a/> and invite different teams to fill out the plan with items needed within their units. Such a document would fast track purchases, streamline the procurement process and enhance the value of money.
</p>

<h4>5. Provide Clear Procurement Guidelines</h4>
<p>
Organisations benefit when staff know exactly how to initiate a purchase. A concise procurement handbook detailing threshold, required documents, timelines, and roles helps reduce confusion and ensures adherence to internal controls.
</p>

<h3>The Way Forward</h3>
<p>
Organisations seeking to simplify their procurement processes must invest in clarity, technology, and consistent communication. By adopting these practical steps, teams can reduce administrative friction, enhance compliance, and ultimately create a procurement function that is efficient, transparent, and strategically aligned with organisational goals.
</p>
`,
  },

  fun: {
    title: " Fun Facts About Procurement for Humanitarian & Developmental Operations",
    content: `
    <p>
    Procurement in NGOs and International Organisations is often portrayed as a highly technical, policydriven function but behind the paperwork, compliance requirements, and donor regulations lies a surprisingly entertaining world. Whether you work in programmes, finance, logistics, or support services, you’ve likely witnessed some of the quirks that make procurement both essential and unforgettable in humanitarian and development operations. Here are six fun, relatable facts that capture the everyday realities of procurement teams working around the world.
    </p>
    <h4>1. Procurement Officers Are Basically “Detectives in Disguise”</h4>
    <p>
From verifying supplier legitimacy to spotting suspicious quotes, procurement teams often do more investigation than the average crimeshow detective. They can identify a fake tax certificate or inflated quote faster than most people can finish a cup of coffee.
</p>

<h4>2. Three Quotes Is a Universal Rule… and a Running Joke</h4>
<p>
Ask any programme or logistics officer: no matter how urgent the request is, procurement will ALWAYS ask 
<b>“Where are the three quotes?”</b></p> 
<p>
It's the unbreakable global law that unites NGOs from Algeria to Zambia.
</p>

<h4>3. Emergency Procurement Has One Superpower: Stress-Free Speed (…in theory)</h4>
<p>
In emergencies, procurement rules allow “fasttrack” processes. But the ironic twist?
The faster the need, the harder it is to find a supplier who actually answers their phone, has stock, and can deliver “yesterday.”
</p>

<h4>4. Donors Love Documentation More Than Anything Else</h4>
<p>
Procurement files must be so complete that they could survive a court case, an audit, or a surprise donor field visit. Every NGO professional knows the golden rule:
<b>“If it’s not documented, it didn’t happen.”</b></p>
<p>
This makes procurement staff champions of traceability.
</p>

<h4>5. Supplier Vetting Is a Diplomatic Game</h4>
<p>NGOs must avoid conflicts of interest, fraud, and unethical behaviour. That means suppliers are vetted more thoroughly than job applicants. And yes, suppliers often call the office five times a day asking: <a>“How far with my registration?<a/>”</p>

<h4>6. Framework Agreements Are the Unsung Heroes of Humanitarian Operations</h4>
<p>
Need laptops? Fuel? Hygiene kits? A framework agreement means you can bypass long tendering and just issue a purchase order. Many field staff consider frameworks the closest thing to magic in the procurement world saving time, money, and countless
</p>

<b> In sum...</b>
<p>While procurement is built on compliance, transparency, and valueformoney principles, it is also a lively ecosystem filled with quirks that every humanitarian and development professional recognises. These fun facts reveal what makes procurement both challenging and uniquely rewarding and why procurement teams remain vital to every successful humanitarian or developmental mission.
</p>
`,
  },
};

const blogPosts = [
  {
    title: "Simplifying Procurement: 5 Tips",
    excerpt:
      "Learn how to streamline your procurement process and save time with these expert tips.",
    category: "Insights",
    date: "Mar 9, 2026",
    key: "tips",
    img: "/images/progress.jpeg",
  },
  {
    title: "Why Procurement Matters in Organisations",
    excerpt:
      "Track your expenses and give your money value through a yearly procurement plan.",
    category: "News",
    date: "Mar 1, 2026",
    key: "procurement",
    img: "/images/problem.jpeg",
  },
  {
    title: "Fun Facts About Procurement",
    excerpt:
      "Do you know procurement has been evolving for over 50 years? Discover fun trivia.",
    category: "Fun",
    date: "Feb 25, 2026",
    key: "fun",
    img: "/images/cube.jpeg",
  },
];

const BlogPage = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <div className="bg-gray-50 font-poppins">

      {/* Hero */}
      <section className="relative h-112.5 flex items-center justify-center text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center blur-sm brightness-75"
          style={{ backgroundImage: "url('/images/news.jpeg')" }}
        />

        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
            ProCure Insights & News
          </h1>
          <p className="text-lg md:text-2xl text-white/90">
            Stay updated with trends, insights and stories from procurement.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid gap-12 md:grid-cols-3">
          {blogPosts.map((post, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition hover:-translate-y-2"
            >
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6 flex flex-col gap-4">
                <span className="text-blue-600 text-sm font-semibold">
                  {post.category} · {post.date}
                </span>

                <h3 className="text-xl font-bold">{post.title}</h3>

                <p className="text-gray-600 grow">{post.excerpt}</p>

                <button
                  onClick={() => setSelectedArticle(articles[post.key])}
                  className="self-end bg-blue-800 text-white px-6 py-2 rounded-xl hover:bg-blue-600 transition"
                >
                  See More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Article Modal */}
      {selectedArticle && (
       <div
  className="fixed inset-0 bg-black/60 flex items-center justify-center p-6 z-50"
  onClick={() => setSelectedArticle(null)}
>

          <div
  className="bg-white max-w-3xl w-full rounded-3xl shadow-2xl p-8 overflow-y-auto max-h-[80vh]"
  onClick={(e) => e.stopPropagation()}
>

            <div className="flex justify-between items-center mb-6 sticky top-0 bg-white z-10 pb-2">
              <h2 className="text-3xl font-bold text-blue-800 items-center text-center">
                {selectedArticle.title}
              </h2>

              <button
                onClick={() => setSelectedArticle(null)}
                className="text-gray-500 hover:text-black text-xl"
              >
                ✕
              </button>
            </div>

            {/* Correct Rendering */}
            <div
              className="
                text-gray-700
                leading-relaxed
                space-y-4
                [&_h3]:text-2xl
                [&_h3]:font-bold
                [&_h3]:mt-6
                [&_h4]:text-xl
                [&_h4]:font-semibold
                [&_h4]:mt-4
              "
              dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
            />

          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPage;