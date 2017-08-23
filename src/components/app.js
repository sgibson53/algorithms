import '../scss/main.less';

import React from 'react';

import global from '../core/global';
import data from '../assets/textbook.json';

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: data
        }
    }

    tableOfContents() {
        var self = this;

        return <div className="table-of-contents" id="table-of-contents">
                    <div className="appendix-title">Contents</div>
                    <a href='#preface' className="preface">Preface</a>
                    {self.build_TOC_Sections()}
                </div>

    }

    build_TOC_Sections() {
        var self = this;

        return this.state.data.table_of_contents.map((section, i) => {
            return <div className="chapter" key={i}>
                        <div className="chapter-title">{romanize(i+1)}  {section.section_title}</div>
                        <div className="chapter-interior">
                            <a href="#" className="intro">Introduction</a>
                            <div className="chapter-section">
                                {self.build_TOC_Chapters(section)}
                            </div>
                        </div>
                    </div>
        });
    }

    build_TOC_Chapters(section) {
        var self = this;

        return section.chapters.map((chapter, i) => {
            return <div className="chapter-section" key={i}>
                        <a href="#" className="chapter-section-title"><span className="section-number"></span>{chapter.chapter_title}</a>
                        {self.build_TOC_SubChapters(chapter)}
                    </div>
        });
    }

    build_TOC_SubChapters(chapter) {
        return chapter.sub_chapters.map((sub_chapter, i) => {
            return <a href="#" className="chapter-section-sub-title" key={i}>{sub_chapter.sub_chapter_title}</a>
        });
    }

    sectionTitlePage(title, index) {
        return <div className="section-title-page">
                    <div className="section-title italic">{romanize(index+1)} {title}</div>
                </div>
    }



    render() {
        var self = this;
        var intro_page = <div className="title-container">
                            <div className="title">Introduction to Algorithms
                                <div className="sub-title">
                                    Third Edition
                                </div>
                            </div>
                        </div>

        return <div>

                <a href="#table-of-contents" className="contents-tab">Table of Contents</a>

                <div id="cover-img"></div>
                {intro_page}
                <div className="title-container">
                    <div className="author-list">
                        <div className="author">Thomas H. Cormen</div>
                        <div className="author">Charles E. Leiserson</div>
                        <div className="author">Ronald L. Rivest</div>
                        <div className="author">Clifford Stein</div>
                    </div>
                    <div className="title">Introduction to Algorithms
                        <div className="sub-title">
                            Third Edition
                        </div>
                    </div>
                    <div className="intro-bottom-info">
                        <div>The MIT Press</div>
                        <div>Cambridge, Massachusetts  London, England</div>
                    </div>
                </div>
                <div className="copy-right-info">
                    <div className="info">
                        <div className="info-section">
                            &copy; 2009 Massachusetts Institute of Technology
                        </div>
                        <div className="info-section">
                            All rigths reserved. No part of this book may be reproduced in any form or by any electronic or mechanical means (including photocopying, recording, or information storage and retrieval) without permission in writing from the publisher.
                        </div>
                        <div className="info-section">For information about special quantity discounts, please email special_sales@mitpress.mit.edu</div>
                        <div className="info-section">This book was set in Times Roman and Mathtime Pro 2 by the authors.</div>
                        <div className="info-section">Printed and bound in the United States of America.</div>
                        <div className="info-section">Library of Congress Cataloging-in-Publication Data</div>
                        <div className="info-section">Introduction to algorithms / Thomas H. Cormen . . . [et al.].—3rd ed.</div>
                        <div className="info-section left-indent">p. cm.</div>
                        <div className="info-section left-indent">Includes bibliographical references and index.</div>
                        <div className="info-section left-indent">ISBN 978-0-262-03384-8 (hardcover : alk. paper)—ISBN 978-0-262-53305-8 (pbk. : alk. paper)</div>
                        <div className="info-section left-indent">1. Computer programming. 2. Computer algorithms. I. Cormen, Thomas H.</div>
                        <div className="info-section one">QA76.6.I5858 2009</div>
                        <div className="info-section two">005.1—dc22</div>
                        <div className="info-section three">2009008593</div>
                        <div className="info-section four">10 9 8 7 6 5 4 3 2</div>
                    </div>
                </div>

                {self.tableOfContents()}

                <div className="appendix appendix-preface">
                        <div className="appendix-title" id="preface">Preface</div>
                        <div className="paragraph first-paragraph">
                            Before there were computers, there were algorithms. But now that there are computers, there are even more algorithms, and algorithms lie at the heart of computing.
                        </div>
                        <div className="paragraph">This book provides a comprehensive introduction to the modern study of computer algorithms. It presents many algorithms and covers them in considerable depth, yet makes their design and analysis accessible to all levels of readers. We have tried to keep explanations elementary without sacrificing depth of coverage
or mathematical rigor.
                        </div>
                        <div className="paragraph">
                            Each chapter presents an algorithm, a design technique, an application area, or a related topic. Algorithms are described in English and in a pseudocode designed to be readable by anyone who has done a little programming. The book contains 244 figures—many with multiple parts—illustrating how the algorithms work. Since we emphasize <i>efficiency</i> as a design criterion, we include careful analyses of the running times of all our algorithms.
                        </div>
                        <div className="paragraph">
                            The text is intended primarily for use in undergraduate or graduate courses in algorithms or data structures. Because it discusses engineering issues in algorithm design, as well as mathematical aspects, it is equally well suited for self-study by technical professionals.
                        </div>
                        <div className="paragraph">
                            In this, the third edition, we have once again updated the entire book. The changes cover a broad spectrum, including new chapters, revised pseudocode, and a more active writing style.
                        </div>

                        <div className="bold-sub-header">To the teacher</div>

                        <div className="paragraph first-paragraph">
                            We have designed this book to be both versatile and complete. You should find it useful for a variety of courses, from an undergraduate course in data structures up through a graduate course in algorithms. Because we have provided considerably more material than can fit in a typical one-term course, you can consider this book to be a “buffet” or “smorgasbord” from which you can pick and choose the material that best supports the course you wish to teach.
                        </div>
                        <div className="paragraph">
                            You should find it easy to organize your course around just the chapters you need. We have made chapters relatively self-contained, so that you need not worry about an unexpected and unnecessary dependence of one chapter on another. Each chapter presents the easier material first and the more difficult material later, with section boundaries marking natural stopping points. In an undergraduate course, you might use only the earlier sections from a chapter; in a graduate course, you might cover the entire chapter.
                        </div>
                        <div className="paragraph">
                            We have included 957 exercises and 158 problems. Each section ends with exercises, and each chapter ends with problems. The exercises are generally short questions that test basic mastery of the material. Some are simple self-check thought exercises, whereas others are more substantial and are suitable as assigned homework. The problems are more elaborate case studies that often introduce new material; they often consist of several questions that lead the student through the steps required to arrive at a solution.
                        </div>
                        <div className="paragraph">
                            Departing from our practice in previous editions of this book, we have made publicly available solutions to some, but by no means all, of the problems and exercises. Our Web site, http://mitpress.mit.edu/algorithms/, links to these solutions. You will want to check this site to make sure that it does not contain the solution to an exercise or problem that you plan to assign. We expect the set of solutions that we post to grow slowly over time, so you will need to check it each time you teach the course.
                        </div>
                        <div className="paragraph">
                            We have starred (&#9733;) the sections and exercises that are more suitable for graduate students than for undergraduates. A starred section is not necessarily more difficult than an unstarred one, but it may require an understanding of more advanced mathematics. Likewise, starred exercises may require an advanced background or more than average creativity.
                        </div>

                        <div className="bold-sub-header">To the student</div>

                        <div className="paragraph first-paragraph">
                            We hope that this textbook provides you with an enjoyable introduction to the field of algorithms. We have attempted to make every algorithm accessible and interesting. To help you when you encounter unfamiliar or difficult algorithms, we describe each one in a step-by-step manner. We also provide careful explanations of the mathematics needed to understand the analysis of the algorithms. If you already have some familiarity with a topic, you will find the chapters organized so that you can skim introductory sections and proceed quickly to the more advanced material.
                        </div>
                        <div className="paragraph">
                            This is a large book, and your class will probably cover only a portion of its material. We have tried, however, to make this a book that will be useful to you now as a course textbook and also later in your career as a mathematical desk reference or an engineering handbook.
                        </div>
                        <div className="paragraph">
                            What are the prerequisites for reading this book?
                        </div>
                        <ul className="bulleted-list">
                            <li>
                                <span className="inner-bullet">
                                    You should have some programming experience. In particular, you should understand recursive procedures and simple data structures such as arrays and linked lists.
                                </span>
                            </li>
                            <li>
                                <span className="inner-bullet">
                                    You should have some facility with mathematical proofs, and especially proofs by mathematical induction. A few portions of the book rely on some knowledge of elementary calculus. Beyond that, Parts I and VIII of this book teach you all the mathematical techniques you will need.
                                </span>
                            </li>
                        </ul>
                        <div className="paragraph">
                            We have heard, loud and clear, the call to supply solutions to problems and exercises. Our Web site, http://mitpress.mit.edu/algorithms/, links to solutions for a few of the problems and exercises. Feel free to check your solutions against ours. We ask, however, that you do not send your solutions to us.
                        </div>

                        <div className="bold-sub-header">To the professional</div>

                        <div className="paragraph first-paragraph">
                            The wide range of topics in this book makes it an excellent handbook on algorithms. Because each chapter is relatively self-contained, you can focus in on the topics that most interest you.
                        </div>
                        <div className="paragraph">
                            Most of the algorithms we discuss have great practical utility. We therefore address implementation concerns and other engineering issues. We often provide practical alternatives to the few algorithms that are primarily of theoretical interest.
                        </div>
                        <div className="paragraph">
                            If you wish to implement any of the algorithms, you should find the translation of our pseudocode into your favorite programming language to be a fairly straightforward task. We have designed the pseudocode to present each algorithm clearly and succinctly. Consequently, we do not address error-handling and other software-engineering issues that require specific assumptions about your programming environment. We attempt to present each algorithm simply and directly without allowing the idiosyncrasies of a particular programming language to obscure its essence.
                        </div>
                        <div className="paragraph">
                            We understand that if you are using this book outside of a course, then you might be unable to check your solutions to problems and exercises against solutions provided by an instructor. Our Web site, http://mitpress.mit.edu/algorithms/, links to solutions for some of the problems and exercises so that you can check your work. Please do not send your solutions to us.
                        </div>

                        <div className="bold-sub-header">To our colleagues</div>

                        <div className="paragraph first-paragraph">
                            We have supplied an extensive bibliography and pointers to the current literature. Each chapter ends with a set of chapter notes that give historical details and references. The chapter notes do not provide a complete reference to the whole field xvi Preface of algorithms, however. Though it may be hard to believe for a book of this size, space constraints prevented us from including many interesting algorithms.
                        </div>
                        <div className="paragraph">
                            Despite myriad requests from students for solutions to problems and exercises, we have chosen as a matter of policy not to supply references for problems and exercises, to remove the temptation for students to look up a solution rather than to find it themselves.
                        </div>

                        <div className="bold-sub-header">
                            Changes for the third edition
                        </div>

                        <div className="paragraph first-paragraph">
                            What has changed between the second and third editions of this book? The magnitude of the changes is on a par with the changes between the first and second editions. As we said about the second-edition changes, depending on how you look at it, the book changed either not much or quite a bit.
                        </div>
                        <div className="paragraph">
                            A quick look at the table of contents shows that most of the second-edition chapters and sections appear in the third edition. We removed two chapters and one section, but we have added three new chapters and two new sections apart from these new chapters.
                        </div>
                        <div className="paragraph">
                            We kept the hybrid organization from the first two editions. Rather than organizing chapters by only problem domains or according only to techniques, this book has elements of both. It contains technique-based chapters on divide-and-conquer, dynamic programming, greedy algorithms, amortized analysis, NP-Completeness, and approximation algorithms. But it also has entire parts on sorting, on data structures for dynamic sets, and on algorithms for graph problems. We find that although you need to know how to apply techniques for designing and analyzing algorithms, problems seldom announce to you which techniques are most amenable to solving them.
                        </div>
                        <div className="paragraph">
                            Here is a summary of the most significant changes for the third edition:
                        </div>
                        <ul className="bulleted-list">
                            <li>
                                <span className="inner-bullet">
                                    We added new chapters on van Emde Boas trees and multithreaded algorithms, and we have broken out material on matrix basics into its own appendix chapter.
                                </span>
                            </li>
                            <li>
                                <span className="inner-bullet">
                                    We revised the chapter on recurrences to more broadly cover the divide-and-conquer technique, and its first two sections apply divide-and-conquer to solve two problems. The second section of this chapter presents Strassen’s algorithm for matrix multiplication, which we have moved from the chapter on matrix operations.
                                </span>
                            </li>
                            <li>
                                <span className="inner-bullet">
                                    We removed two chapters that were rarely taught: binomial heaps and sorting networks. One key idea in the sorting networks chapter, the 0-1 principle, appears in this edition within Problem 8-7 as the 0-1 sorting lemma for compareexchange algorithms. The treatment of Fibonacci heaps no longer relies on binomial heaps as a precursor.
                                </span>
                            </li>
                            <li>
                                <span className="inner-bullet">
                                    We revised our treatment of dynamic programming and greedy algorithms. Dynamic programming now leads off with a more interesting problem, rod cutting, than the assembly-line scheduling problem from the second edition. Furthermore, we emphasize memoization a bit more than we did in the second edition, and we introduce the notion of the subproblem graph as a way to understand the running time of a dynamic-programming algorithm. In our opening example of greedy algorithms, the activity-selection problem, we get to the greedy algorithm more directly than we did in the second edition.
                                </span>
                            </li>
                            <li>
                                <span className="inner-bullet">
                                    The way we delete a node from binary search trees (which includes red-black trees) now guarantees that the node requested for deletion is the node that is actually deleted. In the first two editions, in certain cases, some other node would be deleted, with its contents moving into the node passed to the deletion procedure. With our new way to delete nodes, if other components of a program maintain pointers to nodes in the tree, they will not mistakenly end up with stale pointers to nodes that have been deleted.
                                </span>
                            </li>
                            <li>
                                <span className="inner-bullet">
                                    The material on flow networks now bases flows entirely on edges. This approach is more intuitive than the net flow used in the first two editions.
                                </span>
                            </li>
                            <li>
                                <span className="inner-bullet">
                                    With the material on matrix basics and Strassen’s algorithm moved to other chapters, the chapter on matrix operations is smaller than in the second edition.
                                </span>
                            </li>
                            <li>
                                <span className="inner-bullet">
                                    We have modified our treatment of the Knuth-Morris-Pratt string-matching algorithm.
                                </span>
                            </li>
                            <li>
                                <span className="inner-bullet">
                                    We corrected several errors. Most of these errors were posted on our Web site of second-edition errata, but a few were not.
                                </span>
                            </li>
                            <li>
                                <span className="inner-bullet">
                                    Based on many requests, we changed the syntax (as it were) of our pseudocode. We now use “D” to indicate assignment and “==” to test for equality, just as C, C++, Java, and Python do. Likewise, we have eliminated the keywords <b>do</b> and <b>then</b> and adopted “//” as our comment-to-end-of-line symbol. We also now use dot-notation to indicate object attributes. Our pseudocode remains procedural, rather than object-oriented. In other words, rather than running methods on objects, we simply call procedures, passing objects as parameters.
                                </span>
                            </li>
                            <li>
                                <span className="inner-bullet">
                                    We added 100 new exercises and 28 new problems. We also updated many bibliography entries and added several new ones.
                                </span>
                            </li>
                            <li>
                                <span className="inner-bullet">
                                    Finally, we went through the entire book and rewrote sentences, paragraphs, and sections to make the writing clearer and more active.
                                </span>
                            </li>
                        </ul>

                        <div className="bold-sub-header">Web site</div>

                        <div className="paragraph first-paragraph">
                            You can use our Web site, http://mitpress.mit.edu/algorithms/, to obtain supplementary information and to communicate with us. The Web site links to a list of known errors, solutions to selected exercises and problems, and (of course) a list explaining the corny professor jokes, as well as other content that we might add. The Web site also tells you how to report errors or make suggestions.
                        </div>

                        <div className="bold-sub-header">How we produced this book</div>

                        <div className="paragraph first-paragraph">
                            Like the second edition, the third edition was produced in <span className="latex">L<sup>a</sup>T<sub>e</sub>X</span> 2<sub className="italic epsilon">&epsilon;</sub>. We used the Times font with mathematics typeset using the MathTime Pro 2 fonts. We thank Michael Spivak from Publish or Perish, Inc., Lance Carnes from Personal TeX, Inc., and Tim Tregubov from Dartmouth College for technical support. As in the previous two editions, we compiled the index using Windex, a C program that we wrote, and the bibliography was produced with BIB<span className="tex">T<sub>e</sub>X</span>. The PDF files for this book were created on a MacBook running OS 10.5.
                        </div>
                        <div className="paragraph">
                            We drew the illustrations for the third edition using MacDraw Pro, with some of the mathematical expressions in illustrations laid in with the psfrag package for <span className="latex">L<sup>a</sup>T<sub>e</sub>X</span> 2<sub className="italic epsilon">&epsilon;</sub>. Unfortunately, MacDraw Pro is legacy software, having not been marketed for over a decade now. Happily, we still have a couple of Macintoshes that can run the Classic environment under OS 10.4, and hence they can run MacDraw Pro — mostly. Even under the Classic environment, we find MacDraw Pro to be far easier to use than any other drawing software for the types of illustrations that accompany computer-science text, and it produces beautiful output.<sup>1</sup> Who knows how long our pre-Intel Macs will continue to run, so if anyone from Apple is listening: <i>Please create an OS X-compatible version of MacDraw Pro!</i>
                        </div>
                        
                        <div className="bold-sub-header">Acknowledgments for the third edition</div>
                        <div className="paragraph first-paragraph">
                            We have been working with the MIT Press for over two decades now, and what a terrific relationship it has been! We thank Ellen Faran, Bob Prior, Ada Brunstein, and Mary Reilly for their help and support.
                        </div>
                        <div className="paragraph">
                            We were geographically distributed while producing the third edition, working in the Dartmouth College Department of Computer Science, the MIT Computer Science and Artificial Intelligence Laboratory, and the Columbia University Department of Industrial Engineering and Operations Research. We thank our respective universities and colleagues for providing such supportive and stimulating environments.
                        </div>
                        <div className="paragraph">
                            Julie Sussman, P.P.A., once again bailed us out as the technical copyeditor. Time and again, we were amazed at the errors that eluded us, but that Julie caught. She also helped us improve our presentation in several places. If there is a Hall of Fame for technical copyeditors, Julie is a sure-fire, first-ballot inductee. She is nothing short of phenomenal. Thank you, thank you, thank you, Julie! Priya Natarajan also found some errors that we were able to correct before this book went to press. Any errors that remain (and undoubtedly, some do) are the responsibility of the authors (and probably were inserted after Julie read the material).
                        </div>
                        <div className="paragraph">
                            The treatment for van Emde Boas trees derives from Erik Demaine’s notes, which were in turn influenced by Michael Bender. We also incorporated ideas from Javed Aslam, Bradley Kuszmaul, and Hui Zha into this edition.
                        </div>
                        <div className="paragraph">
                            The chapter on multithreading was based on notes originally written jointly with Harald Prokop. The material was influenced by several others working on the Cilk project at MIT, including Bradley Kuszmaul and Matteo Frigo. The design of the multithreaded pseudocode took its inspiration from the MIT Cilk extensions to C and by Cilk Arts’s Cilk++ extensions to C++.
                        </div>
                        <div className="paragraph">
                            We also thank the many readers of the first and second editions who reported errors or submitted suggestions for how to improve this book. We corrected all the bona fide errors that were reported, and we incorporated as many suggestions as we could. We rejoice that the number of such contributors has grown so great that we must regret that it has become impractical to list them all.
                        </div>
                        <div className="paragraph">
                            Finally, we thank our wives—Nicole Cormen, Wendy Leiserson, Gail Rivest, and Rebecca Ivry—and our children—Ricky, Will, Debby, and Katie Leiserson; Alex and Christopher Rivest; and Molly, Noah, and Benjamin Stein—for their love and support while we prepared this book. The patience and encouragement of our families made this project possible. We affectionately dedicate this book to them.
                        </div>

                        <div id="preface-authors">
                            <div className="authors">
                                <div>THOMAS H. CORMEN</div>
                                <div>CHARLES E. LEISERSON</div>
                                <div>RONALD L. RIVEST</div>
                                <div>CLIFFORD STEIN</div>
                            </div>
                            <div className="locations">
                                <div className="italic">Lebanon, New Hampshire</div>
                                <div className="italic">Cambridge, Massachusetts</div>
                                <div className="italic">Cambridge, Massachusetts</div>
                                <div className="italic">New York, New York</div>
                            </div>
                        </div>

                        <div id="preface-date" className="italic">February 2009</div>

                        <div className="citations">
                            <div className="citation">
                                <sup>1</sup>We investigated several drawing programs that run under Mac OS X, but all had significant shortcomings compared with MacDraw Pro. We briefly attempted to produce the illustrations for this book with a different, well known drawing program. We found that it took at least five times as long to produce each illustration as it took with MacDraw Pro, and the resulting illustrations did not look as good. Hence the decision to revert to MacDraw Pro running on older Macintoshes.
                            </div>
                        </div>

                    </div>

                {intro_page}

                <div className="sections">

                    {self.sectionTitlePage(self.state.data.table_of_contents[0].section_title, 0)}

                    <div className="section-intro">
                        <div className="title" id="section-intro-1">Introduction</div>
                        <div className="section-intro-content">

                            <div className="paragraph first-paragraph">
                                This part will start you thinking about designing and analyzing algorithms. It is intended to be a gentle introduction to how we specify algorithms, some of the design strategies we will use throughout this book, and many of the fundamental ideas used in algorithm analysis. Later parts of this book will build upon this base.
                            </div>
                            <div className="paragraph">
                                Chapter 1 provides an overview of algorithms and their place in modern computing systems. This chapter defines what an algorithm is and lists some examples. It also makes a case that we should consider algorithms as a technology, alongside technologies such as fast hardware, graphical user interfaces, object-oriented systems, and networks.
                            </div>
                            <div className="paragraph">
                                In Chapter 2, we see our first algorithms, which solve the problem of sorting a sequence of <i>n</i> numbers. They are written in a pseudocode which, although not directly translatable to any conventional programming language, conveys the structure of the algorithm clearly enough that you should be able to implement it in the language of your choice. The sorting algorithms we examine are insertion sort, which uses an incremental approach, and merge sort, which uses a recursive technique known as “divide-and-conquer.” Although the time each requires increases with the value of <i>n</i>, the rate of increase differs between the two algorithms. We determine these running times in Chapter 2, and we develop a useful notation to express them.
                            </div>
                            <div className="paragraph">
                                Chapter 3 precisely defines this notation, which we call asymptotic notation. It starts by defining several asymptotic notations, which we use for bounding algorithm running times from above and/or below. The rest of Chapter 3 is primarily a presentation of mathematical notation, more to ensure that your use of notation matches that in this book than to teach you new mathematical concepts.
                            </div>
                            <div className="paragraph">
                                Chapter 4 delves further into the divide-and-conquer method introduced in Chapter 2. It provides additional examples of divide-and-conquer algorithms, including Strassen’s surprising method for multiplying two square matrices. Chapter 4 contains methods for solving recurrences, which are useful for describing the running times of recursive algorithms. One powerful technique is the “master method,” which we often use to solve recurrences that arise from divide-and-conquer algorithms. Although much of Chapter 4 is devoted to proving the correctness of the master method, you may skip this proof yet still employ the master method.
                            </div>
                            <div className="paragraph">
                                Chapter 5 introduces probabilistic analysis and randomized algorithms. We typically use probabilistic analysis to determine the running time of an algorithm in cases in which, due to the presence of an inherent probability distribution, the running time may differ on different inputs of the same size. In some cases, we assume that the inputs conform to a known probability distribution, so that we are averaging the running time over all possible inputs. In other cases, the probability distribution comes not from the inputs but from random choices made during the course of the algorithm. An algorithm whose behavior is determined not only by its input but by the values produced by a random-number generator is a randomized algorithm. We can use randomized algorithms to enforce a probability distribution on the inputs—thereby ensuring that no particular input always causes poor performance—or even to bound the error rate of algorithms that are allowed to produce incorrect results on a limited basis.
                            </div>
                            <div className="paragraph">
                                Appendices A–D contain other mathematical material that you will find helpful as you read this book. You are likely to have seen much of the material in the appendix chapters before having read this book (although the specific definitions and notational conventions we use may differ in some cases from what you have seen in the past), and so you should think of the Appendices as reference material. On the other hand, you probably have not already seen most of the material in Part I. All the chapters in Part I and the Appendices are written with a tutorial flavor.
                            </div>

                        </div>
                    </div>

                    <div className="chapter">
                        <div className="chapter-title-container">
                            <div className="title bold">
                                The Role of Algorithms in Computing
                            </div>
                            <div className="title-paragraph">
                                What are algorithms? Why is the study of algorithms worthwhile? What is the role of algorithms relative to other technologies used in computers? In this chapter, we will answer these questions.
                            </div>
                        </div>
                        <div className="sub-chapter">
                            <div className="sub-chapter-title bold">
                                Algorithms
                            </div>

                            <div className="first-paragraph">
                                Informally, an <b><i>algorithm</i></b> is any well-defined computational procedure that takes some value, or set of values, as <b><i>input</i></b> and produces some value, or set of values, as <b><i>output</i></b>. An algorithm is thus a sequence of computational steps that transform the input into the output.
                            </div>
                            <div className="paragraph">
                                We can also view an algorithm as a tool for solving a well-specified <b><i>computational problem</i></b>. The statement of the problem specifies in general terms the desired input/output relationship. The algorithm describes a specific computational procedure for achieving that input/output relationship.
                            </div>
                            <div className="paragraph">
                                For example, we might need to sort a sequence of numbers into nondecreasing order. This problem arises frequently in practice and provides fertile ground for introducing many standard design techniques and analysis tools. Here is how we formally define the <b><i>sorting problem</i></b>:
                            </div>

                            <div className="input">
                                A sequence of <i>n</i> numbers 〈a<sub>1</sub>, a<sub>2</sub>, ..., a<sub className="italic">n</sub>〉.
                            </div> 
                            <div className="output">
                                A permutation (re-ordering) 〈a&prime;<sub>1</sub>, a&prime;<sub>2</sub>, ..., a&prime;<sub>n</sub>〉 of the input sequence such that a&prime;<sub>1</sub> &le; a&prime;<sub>2</sub> &le; &middot;&middot;&middot; &le; a&prime;<sub className="italic">n</sub>
                            </div>
                            <div className="paragraph">
                                For example, given the input sequence (31, 41, 59, 26, 41, 58), a sorting algorithm returns as output the sequence (26, 31, 41, 41, 58, 59). Such an input sequence is called an <b>instance</b> of the sorting problem. In general, an <b>instance of a problem</b> consists of the input (satisfying whatever constraints are imposed in the problem statement) needed to compute a solution to the problem.
                            </div>
                            <div className="paragraph">
                                Because many programs use it as an intermediate step, sorting is a fundamental operation in computer science. As a result, we have a large number of good sorting algorithms at our disposal. Which algorithm is best for a given application depends on—among other factors—the number of items to be sorted, the extent to which the items are already somewhat sorted, possible restrictions on the item values, the architecture of the computer, and the kind of storage devices to be used: main memory, disks, or even tapes.
                            </div>
                            <div className="paragraph">
                                An algorithm is said to be correct if, for every input instance, it halts with the <b><i>correct</i></b> output. We say that a correct algorithm <b><i>solves</i></b> the given computational problem. An incorrect algorithm might not halt at all on some input instances, or it might halt with an incorrect answer. Contrary to what you might expect, incorrect algorithms can sometimes be useful, if we can control their error rate. We shall see an example of an algorithm with a controllable error rate in Chapter 31 when we study algorithms for finding large prime numbers. Ordinarily, however, we shall be concerned only with correct algorithms.
                            </div>
                            <div className="paragraph">
                                An algorithm can be specified in English, as a computer program, or even as a hardware design. The only requirement is that the specification must provide a precise description of the computational procedure to be followed.
                            </div>

                            <div className="chapter-sub-header">What kinds of problems are solved by algorithms?</div>

                            <div className="first-paragraph">
                                Sorting is by no means the only computational problem for which algorithms have been developed. (You probably suspected as much when you saw the size of this book.) Practical applications of algorithms are ubiquitous and include the following examples:
                            </div>

                            <ul className="bulleted-list">
                                <li>
                                    <span className="inner-bullet">
                                        The Human Genome Project has made great progress toward the goals of identifying all the 100,000 genes in human DNA, determining the sequences of the 3 billion chemical base pairs that make up human DNA, storing this information in databases, and developing tools for data analysis. Each of these steps requires sophisticated algorithms. Although the solutions to the various problems involved are beyond the scope of this book, many methods to solve these biological problems use ideas from several of the chapters in this book, thereby enabling scientists to accomplish tasks while using resources efficiently. The savings are in time, both human and machine, and in money, as more information can be extracted from laboratory techniques.
                                    </span>
                                </li>
                                <li>
                                    <span className="inner-bullet">
                                        The Internet enables people all around the world to quickly access and retrieve large amounts of information. With the aid of clever algorithms, sites on the Internet are able to manage and manipulate this large volume of data. Examples of problems that make essential use of algorithms include finding good routes on which the data will travel (techniques for solving such problems appear in Chapter 24), and using a search engine to quickly find pages on which particular information resides (related techniques are in Chapters 11 and 32).
                                    </span>
                                </li>
                                <li>
                                    <span className="inner-bullet">
                                        Electronic commerce enables goods and services to be negotiated and exchanged electronically, and it depends on the privacy of personal information such as credit card numbers, passwords, and bank statements. The core technologies used in electronic commerce include public-key cryptography and digital signatures (covered in Chapter 31), which are based on numerical algorithms and number theory.
                                    </span>
                                </li>
                                <li>
                                    <span className="inner-bullet">
                                        Manufacturing and other commercial enterprises often need to allocate scarce resources in the most beneficial way. An oil company may wish to know where to place its wells in order to maximize its expected profit. A political candidate may want to determine where to spend money buying campaign advertising in order to maximize the chances of winning an election. An airline may wish to assign crews to flights in the least expensive way possible, making sure that each flight is covered and that government regulations regarding crew scheduling are met. An Internet service provider may wish to determine where to place additional resources in order to serve its customers more effectively. All of these are examples of problems that can be solved using linear programming, which we shall study in Chapter 29.
                                    </span>
                                </li>
                            </ul>

                            <div className="paragraph">
                                Although some of the details of these examples are beyond the scope of this book, we do give underlying techniques that apply to these problems and problem areas. We also show how to solve many specific problems, including the following:
                            </div>

                            <ul className="bulleted-list">
                                <li>
                                    <span className="inner-bullet">
                                        We are given a road map on which the distance between each pair of adjacent intersections is marked, and we wish to determine the shortest route from one intersection to another. The number of possible routes can be huge, even if we disallow routes that cross over themselves. How do we choose which of all possible routes is the shortest? Here, we model the road map (which is itself a model of the actual roads) as a graph (which we will meet in Part VI and Appendix B), and we wish to find the shortest path from one vertex to another in the graph. We shall see how to solve this problem efficiently in Chapter 24.
                                    </span>
                                </li>
                                <li>
                                    <span className="inner-bullet">
                                        We are given two ordered sequences of symbols, <i>X</i> = 〈x<sub>1</sub>, x<sub>2</sub>, ..., a<sub><i>m</i></sub>〉 and <i>Y</i> = 〈y<sub>1</sub>, y<sub>2</sub>, ..., a<sub><i>n</i></sub>〉, and we wish to find a longest common subsequence of <i>X</i> and <i>Y</i>. A subsequence of <i>X</i> is just <i>X</i> with some (or possibly all or none) of its elements removed. For example, one subsequence of 〈<i>A, B, C, D, E, F, G</i>〉 would be 〈<i>B, C, E, G</i>〉. The length of a longest common subsequence of <i>X</i> and <i>Y</i> gives one measure of how similar these two sequences are. For example, if the two sequences are base pairs in DNA strands, then we might consider them similar if they have a long common subsequence. If <i>X</i> has <i>m</i> symbols and <i>Y</i> has <i>n</i> symbols, then <i>X</i> and <i>Y</i> have <i>2<sup>m</sup></i> and <i>2<sup>n</sup></i> possible subsequences, respectively. Selecting all possible subsequences of <i>X</i> and <i>Y</i> and matching them up could take a prohibitively long time unless <i>m</i> and <i>n</i> are very small. We shall see in Chapter 15 how to use a general technique known as dynamic programming to solve this problem much more efficiently.
                                    </span>
                                </li>
                                <li>
                                    <span className="inner-bullet">
                                        We are given a mechanical design in terms of a library of parts, where each part may include instances of other parts, and we need to list the parts in order so that each part appears before any part that uses it. If the design comprises <i>n</i> parts, then there are <i>n!</i> possible orders, where <i>n!</i> denotes the factorial function. Because the factorial function grows faster than even an exponential function, we cannot feasibly generate each possible order and then verify that, within that order, each part appears before the parts using it (unless we have only a few parts). This problem is an instance of topological sorting, and we shall see in Chapter 22 how to solve this problem efficiently.
                                    </span>
                                </li>
                                <li>
                                    <span className="inner-bullet">
                                        We are given <i>n</i> points in the plane, and we wish to find the convex hull of these points. The convex hull is the smallest convex polygon containing the points. Intuitively, we can think of each point as being represented by a nail sticking out from a board. The convex hull would be represented by a tight rubber band that surrounds all the nails. Each nail around which the rubber band makes a turn is a vertex of the convex hull. (See Figure 33.6 on page 1029 for an example.) Any of the <i>2<sup>n</sup></i> subsets of the points might be the vertices of the convex hull. Knowing which points are vertices of the convex hull is not quite enough, either, since we also need to know the order in which they appear. There are many choices, therefore, for the vertices of the convex hull. Chapter 33 gives two good methods for finding the convex hull.
                                    </span>
                                </li>
                            </ul>

                            <div className="paragraph">
                                These lists are far from exhaustive (as you again have probably surmised from this book’s heft), but exhibit two characteristics that are common to many interesting algorithmic problems:
                            </div>

                            <ol className="numbered-list" type="1">
                                <li>
                                    <span className="inner-bullet">
                                        They have many candidate solutions, the overwhelming majority of which do not solve the problem at hand. Finding one that does, or one that is “best,” can present quite a challenge.
                                    </span>
                                </li>
                                <li>
                                    <span className="inner-bullet">
                                        They have practical applications. Of the problems in the above list, finding the shortest path provides the easiest examples. A transportation firm, such as a trucking or railroad company, has a financial interest in finding shortest paths through a road or rail network because taking shorter paths results in lower labor and fuel costs. Or a routing node on the Internet may need to find the shortest path through the network in order to route a message quickly. Or a person wishing to drive from New York to Boston may want to find driving directions from an appropriate Web site, or she may use her GPS while driving.
                                    </span>
                                </li>
                            </ol>

                            <div className="paragraph">
                                Not every problem solved by algorithms has an easily identified set of candidate solutions. For example, suppose we are given a set of numerical values representing samples of a signal, and we want to compute the discrete Fourier transform of these samples. The discrete Fourier transform converts the time domain to the frequency domain, producing a set of numerical coefficients, so that we can determine the strength of various frequencies in the sampled signal. In addition to lying at the heart of signal processing, discrete Fourier transforms have applications in data compression and multiplying large polynomials and integers. Chapter 30 gives an efficient algorithm, the fast Fourier transform (commonly called the FFT), for this problem, and the chapter also sketches out the design of a hardware circuit to compute the FFT.
                            </div>

                            <div className="bold-sub-header">Data structures</div>

                            <div className="first-paragraph">
                                This book also contains several data structures. A <b>data structure</b> is a way to store and organize data in order to facilitate access and modifications. No single data structure works well for all purposes, and so it is important to know the strengths and limitations of several of them.
                            </div>

                            <div className="bold-sub-header">Technique</div>

                            <div className="first-paragraph">
                                Although you can use this book as a “cookbook” for algorithms, you may someday encounter a problem for which you cannot readily find a published algorithm (many of the exercises and problems in this book, for example). This book will teach you techniques of algorithm design and analysis so that you can develop algorithms on your own, show that they give the correct answer, and understand their efficiency. Different chapters address different aspects of algorithmic problem solving. Some chapters address specific problems, such as finding medians and order statistics in Chapter 9, computing minimum spanning trees in Chapter 23, and determining a maximum flow in a network in Chapter 26. Other chapters address techniques, such as divide-and-conquer in Chapter 4, dynamic programming in Chapter 15, and amortized analysis in Chapter 17.
                            </div>

                            <div className="bold-sub-header">Hard problems</div>

                            <div className="first-paragraph">
                                Most of this book is about efficient algorithms. Our usual measure of efficiency is speed, i.e., how long an algorithm takes to produce its result. There are some problems, however, for which no efficient solution is known. Chapter 34 studies an interesting subset of these problems, which are known as NP-complete.
                            </div>
                            <div className="paragraph">
                                Why are NP-complete problems interesting? First, although no efficient algorithm for an NP-complete problem has ever been found, nobody has ever proven that an efficient algorithm for one cannot exist. In other words, no one knows whether or not efficient algorithms exist for NP-complete problems. Second, the set of NP-complete problems has the remarkable property that if an efficient algorithm exists for any one of them, then efficient algorithms exist for all of them. This relationship among the NP-complete problems makes the lack of efficient solutions all the more tantalizing. Third, several NP-complete problems are similar, but not identical, to problems for which we do know of efficient algorithms. Computer scientists are intrigued by how a small change to the problem statement can cause a big change to the efficiency of the best known algorithm.
                            </div>
                            <div className="paragraph">
                                You should know about NP-complete problems because some of them arise surprisingly often in real applications. If you are called upon to produce an efficient algorithm for an NP-complete problem, you are likely to spend a lot of time in a fruitless search. If you can show that the problem is NP-complete, you can instead spend your time developing an efficient algorithm that gives a good, but not the best possible, solution.
                            </div>
                            <div className="paragraph">
                                As a concrete example, consider a delivery company with a central depot. Each day, it loads up each delivery truck at the depot and sends it around to deliver goods to several addresses. At the end of the day, each truck must end up back at the depot so that it is ready to be loaded for the next day. To reduce costs, the company wants to select an order of delivery stops that yields the lowest overall distance traveled by each truck. This problem is the well-known “traveling-salesman problem,” and it is NP-complete. It has no known efficient algorithm. Under certain assumptions, however, we know of efficient algorithms that give an overall distance which is not too far above the smallest possible. Chapter 35 discusses such “approximation algorithms.”
                            </div>

                            <div className="bold-sub-header">Parallelism</div>

                            <div className="first-paragraph">
                                For many years, we could count on processor clock speeds increasing at a steady rate. Physical limitations present a fundamental roadblock to ever-increasing clock speeds, however: because power density increases superlinearly with clock speed, chips run the risk of melting once their clock speeds become high enough. In order to perform more computations per second, therefore, chips are being designed to contain not just one but several processing “cores.” We can liken these multicore computers to several sequential computers on a single chip; in other words, they are a type of “parallel computer.” In order to elicit the best performance from multicore computers, we need to design algorithms with parallelism in mind. Chapter 27 presents a model for “multithreaded” algorithms, which take advantage of multiple cores. This model has advantages from a theoretical standpoint, and it forms the basis of several successful computer programs, including a championship chess program.
                            </div>

                            <div className="bold-sub-header">Exercises</div>
                        </div>
                    </div>

                </div>
            </div>
    }
}