"use client";
import React from 'react';
import Accordion, { AccordionItem, AccordionTitle, AccordionContent } from "../Accordion";

const AccordionWrap = () => {
    return (
        <div className="agency-accordion max-mb-n30">
            <Accordion>
                <AccordionItem id="one">
                    <AccordionTitle id="one"><span className='text-primary fw-bold'>What services does Anthem Infotech offer?</span></AccordionTitle>
                    <AccordionContent id="one">
                        <span className='text-primary fw-bold'>Answer: </span><br />
                        At Anthem Infotech, we provide a comprehensive range of technology services tailored to meet the unique needs of businesses across industries. Our core offerings include:
                        <ul>
                            <li>Custom Software Development</li>
                            <li>Web & Mobile Application Development</li>
                            <li>Generative AI Solutions</li>
                            <li>Chat GPT Integration</li>
                            <li>AI/ML Development</li>
                            <li>Marketing Automation</li>
                            <li>MVP Development</li>
                            <li>Enterprise Software Solutions</li>
                            <li>Data Analysis & ETL</li>
                            <li>UI/UX Design</li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem id="two">
                    <AccordionTitle id="two"><span className='text-primary fw-bold'>How long has Anthem Infotech been in business?</span></AccordionTitle>
                    <AccordionContent id="two">
                        <span className='text-primary fw-bold'>Answer: </span><br />
                        Established in 2011, Anthem Infotech brings over a decade of experience. We have a proven track record of delivering innovative solutions to diverse clients, constantly adapting to technological advancements. You can trust our experience to meet your business needs.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem id="three">
                    <AccordionTitle id="three"><span className='text-primary fw-bold'>What industries does Anthem Infotech serve?</span></AccordionTitle>
                    <AccordionContent id="three">
                        <span className='text-primary fw-bold'>Answer: </span><br />
                        We have extensive experience working with various industries, including:
                        <ul>
                            <li>Food Ordering</li>
                            <li> Information Technologies</li>
                            <li> Business Promotions</li>
                            <li> HOA Automation & Condominium Management</li>
                            <li> Travel & Tourism</li>
                            <li> Logistics & Supply Chain</li>
                            <li> Financial Advisory</li>
                            <li> Construction</li>
                            <li> Healthcare & Medicine</li>
                            <li> Publishing Rights Management</li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem id="three1">
                    <AccordionTitle id="three1"><span className='text-primary fw-bold'>What is the process for starting a project with Anthem Infotech?</span></AccordionTitle>
                    <AccordionContent id="three1">
                        <span className='text-primary fw-bold'>Answer: </span><br />
                        Our project onboarding process typically involves:
                        <ul>
                            <li>An initial consultation to understand your needs and goals</li>
                            <li>Detailed project scoping and requirement gathering</li>
                            <li>Creating a project timeline and milestones</li>
                            <li>Development, testing, and delivery phases</li>
                            <li>Post-launch support and maintenance</li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem id="four">
                    <AccordionTitle id="four"><span className='text-primary fw-bold'>How can custom software help my business?</span></AccordionTitle>
                    <AccordionContent id="four">
                        <span className='text-primary fw-bold'>Answer: </span><br />
                        Custom software is designed to meet your business’s unique challenges, improving efficiency and streamlining operations. Whether ERP, CRM, POS, or financial systems, we create scalable solutions that enhance your business processes and support future growth.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem id="five">
                    <AccordionTitle id="five"><span className='text-primary fw-bold'>Do you develop mobile apps for both iOS and Android?</span></AccordionTitle>
                    <AccordionContent id="five">
                        <span className='text-primary fw-bold'>Answer: </span><br />
                        Yes, we specialise in developing mobile applications for both iOS and Android platforms. We also offer cross-platform development, hybrid, progressive web apps, and responsive design to ensure seamless device functionality.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem id="seven">
                    <AccordionTitle id="seven"><span className='text-primary fw-bold'>What are the benefits of integrating Chat GPT with my business?</span></AccordionTitle>
                    <AccordionContent id="seven">
                        <span className='text-primary fw-bold'>Answer: </span><br />
                        Chat GPT integration can enhance customer service, automate routine tasks, and provide personalised support 24/7. From custom chatbots and interactive voice response (IVR) systems to HR and customer support bots, our solutions improve customer interactions and operational efficiency.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem id="eight">
                    <AccordionTitle id="eight"><span className='text-primary fw-bold'>How can AI/ML solutions improve my business?</span></AccordionTitle>
                    <AccordionContent id="eight">
                        <span className='text-primary fw-bold'>Answer: </span><br />
                        AI/ML technologies offer predictive analytics, process automation, and data-driven decision-making. By implementing AI/ML models such as computer vision, recommendation systems, and NLP, we help businesses optimise operations, predict market trends, and enhance user experiences.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem id="nine">
                    <AccordionTitle id="nine"><span className='text-primary fw-bold'>What is MVP Development, and how can it benefit startups?</span></AccordionTitle>
                    <AccordionContent id="nine">
                        <span className='text-primary fw-bold'>Answer: </span><br />
                        MVP (Minimum Viable Product) Development is a streamlined process of creating a functional product with essential features to test an idea in the market. By gathering feedback early, businesses can iterate quickly, reduce development costs, and validate their product before a full-scale launch.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem id="ten">
                    <AccordionTitle id="ten"><span className='text-primary fw-bold'>How do you handle data analysis and ETL?</span></AccordionTitle>
                    <AccordionContent id="ten">
                        <span className='text-primary fw-bold'>Answer: </span><br />
                        We provide comprehensive data solutions, including:
                        <ul>
                            <li>Data Extraction, Transformation, and Loading (ETL) processes</li>
                            <li>Custom dashboards for real-time insights</li>
                            <li>Data cleaning, warehousing, and visualisation</li>
                            <li>Advanced analytics to empower data-driven decision-making</li>
                        </ul>
                        Our team ensures that data is accurate, accessible, and actionable to support your business goals.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem id="eleven">
                    <AccordionTitle id="eleven"><span className='text-primary fw-bold'>What makes your UI/UX design services stand out?</span></AccordionTitle>
                    <AccordionContent id="eleven">
                        <span className='text-primary fw-bold'>Answer: </span><br />
                        Our UI/UX design process is focused on:
                        <ul>
                            <li>User-centered design principles to enhance usability</li>
                            <li>Creating visually appealing and intuitive interfaces</li>
                            <li>Conducting user research and usability testing</li>
                            <li>Ensuring responsive designs across web and mobile platforms</li>
                        </ul>
                        Our designs look great and offer seamless functionality to improve user engagement.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem id="twelve">
                    <AccordionTitle id="twelve"><span className='text-primary fw-bold'>Do you offer enterprise software solutions?</span></AccordionTitle>
                    <AccordionContent id="twelve">
                        <span className='text-primary fw-bold'>Answer: </span><br />
                        Yes, we specialise in developing secure and scalable enterprise software. Our solutions include workflow automation, CRM integration, financial management, and compliance management. We ensure that our enterprise software solutions are designed to handle complex, large-scale business operations efficiently.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem id="thirteen">
                    <AccordionTitle id="thirteen"><span className='text-primary fw-bold'>What is the process for starting a project with Anthem Infotech?</span></AccordionTitle>
                    <AccordionContent id="thirteen">
                        <span className='text-primary fw-bold'>Answer: </span><br />
                        Initiating a project with Anthem Infotech is a simple and personalised process. You can contact us through our Contact us page with your project idea. We’ll take the time to understand your requirements, create a tailored solution, and guide you through each development phase, from concept to completion.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem id="fourteen">
                    <AccordionTitle id="fourteen"><span className='text-primary fw-bold'>How can I benefit from your marketing automation services?</span></AccordionTitle>
                    <AccordionContent id="fourteen">
                        <span className='text-primary fw-bold'>Answer: </span><br />
                        Our marketing automation services allow businesses to streamline marketing efforts, increase customer engagement, and improve ROI. From automated email campaigns to social media management, lead scoring, SEO, and analytics, we help you target the right audience at the right time with minimal effort.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem id="fifteen">
                    <AccordionTitle id="fifteen"><span className='text-primary fw-bold'>Can you help with designing a Minimum Viable Product (MVP)?</span></AccordionTitle>
                    <AccordionContent id="fifteen">
                        <span className='text-primary fw-bold'>Answer: </span><br />
                        Yes, we help businesses quickly develop MVPs to test product ideas in the market. Our MVP development services include prototyping, user feedback integration, iterative development, and launch strategies to ensure your product is market-ready in minimal time.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem id="sixteen">
                    <AccordionTitle id="sixteen"><span className='text-primary fw-bold'>Do you offer support after project completion?</span></AccordionTitle>
                    <AccordionContent id="sixteen">
                        <span className='text-primary fw-bold'>Answer: </span><br />
                        Yes, we offer ongoing support and maintenance services after project completion to ensure your solutions remain up-to-date and operate efficiently. We provide:
                        <ul>
                            <li>Bug fixing and troubleshooting</li>
                            <li>Performance optimisation</li>
                            <li>Regular updates and feature enhancements</li>
                            <li>Long-term support to adapt to evolving business needs</li>
                        </ul>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem id="seventeen">
                    <AccordionTitle id="seventeen"><span className='text-primary fw-bold'>How does Anthem Infotech ensure the security of enterprise software?</span></AccordionTitle>
                    <AccordionContent id="seventeen">
                        <span className='text-primary fw-bold'>Answer: </span><br />
                        Security is a top priority in all of our enterprise software solutions. We implement:
                        <ul>
                            <li>Advanced encryption and secure coding practices</li>
                            <li>Data protection protocols that comply with industry standards</li>
                            <li>Regular security audits and updates</li>
                            <li>Tailored security solutions to meet your specific business needs</li>
                        </ul>
                        Our enterprise software is built to ensure both data security and compliance.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default AccordionWrap;
