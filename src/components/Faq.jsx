import React from 'react';
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'; // Make sure this is globally imported

export default function Faq() {
    return (
        <div className="px-4 py-12 md:px-20 bg-slate-100">
            <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">FAQs</h2>

            <MDBAccordion initialActive={1}>
                <MDBAccordionItem collapseId={1} headerTitle="Amount">
                    <p className="text-gray-700 text-lg">
                        The amount is ₹4,999 for the full course. You can also opt for monthly payments.
                    </p>
                </MDBAccordionItem>

                <MDBAccordionItem collapseId={2} headerTitle="Timing">
                    <p className="text-gray-700 text-lg">
                        Classes are conducted every weekday from 6 PM to 8 PM IST.
                    </p>
                </MDBAccordionItem>

                <MDBAccordionItem collapseId={3} headerTitle="Teachers">
                    <p className="text-gray-700 text-lg">
                        All our faculty members are from reputed institutes like IITs, NITs and CUSAT with years of teaching experience.
                    </p>
                </MDBAccordionItem>
            </MDBAccordion>
        </div>
    );
}