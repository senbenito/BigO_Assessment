# Big O Assessment

 ### O Boy! It's time to evaluate your understanding of Big O Notation!

 ##

  PART ONE: Please answer the following questions:

 1. Describe the purpose of Big 0.

    Big 0 helps us compare the complexity/efficiency of an algorithm, or how an increase in inputs affects the time/space required to reach the output.

---


 2. What 2 things does it measure?

    Time/space and inputs.

---


 3. Which of the following shows Big O time complexity in order?

    a) O(1), O(n log n), O(log n), O(n), O(n^2)

    b) O(1), O(log n), O(n), O(n log n), O(n^2)

    c) O(1), O(log n), O(n log n), O(n), O(n^2)

    This is the correct order of Big O complexity: b) O(1), O(log n), O(n), O(n log n), O(n^2)

---



4. Which of these algorithm(s) run in O(log n) time?

   Binary Search

   Bubble Sort

   Quick Sort (average case)

   Linear Search

   Binary Search usually completes in O(log n) time.

---



5. Select the best time complexity that even the most efficient sort algorithm can have.

    O(log n)

    O(n log n)

    O(n)

    O(n^2)

    O(log n) time complexity is the best a sort algorithm can achieve.

---


 6. Describe what sets these these 3 complexities apart from each other: O(1), O(n) and O(n^2)

    O(1) is Constant Time, so more inputs to search still take as much time as one input - like accessing an array with index value. O(n) means that as inputs increase, time complexity increases at a 1::1 ratio - like a for loop going through an array. 0(n^2) means that the time increases exponentially to the increase in inputs - image two, nested for loops.

---


7. How would you recognize O(log n) and O(n log n) time complexities in a function?

    If a function uses pivot functionality to search, it probably clocks in at 0(log n). So if a sort uses a pivot, it will carry over the 0(log n) adding in the linear time 0(n) of a sort resulting in 0(n log n) time complexity.

---

  ##

  PART TWO: In a new file, write examples of algorithms/functions for each of the Big O complexities below.
    Upload your file to your repository when complete and submit in Learn --> Exercises.

    1. O(1)

    2. O(n)

    3. O(n^2)
