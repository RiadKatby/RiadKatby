# 2.5 Maximizing float in bank accounts

In the days before quick electronic check clearing, it was often advantageous for large corporations to maintain checking accounts in various locations in order to maximize float. The *float* is the time between making a payment by check and the time that the funds for that payment are deducted from the company’s banking account. During that time, the company can continue to accrue interest on the money. Float can also be used by scam artists for *check kiting*: covering a deficit in the checking account in one bank by writing a check against another account in another bank that also has insufficient funds — then a few days later covering this deficit with a check written against the first account.

We can model the problem of maximizing float as follows. Suppose we wish to open up to $k$ bank accounts so as to maximize our float. Let $B$ be the set of banks where we can potentially open accounts, and let $P$ be the set of payees to whom we regularly make payments. Let $v_{ij} \geq 0$ be the value of the float created by paying payee $j \in P$ from bank account $i \in B$; this may take into account the amount of time it takes for a check written to $j$ to clear at $i$, the interest rate at bank $i$, and other factors. Then we wish to find a set $S \subseteq B$ of banks at which to open accounts such that $|S| \leq k$. Clearly we will pay payee $j \in P$ from the account $i \in S$ that maximizes $v_{ij}$. So we wish to find $S \subseteq B$, $|S| \leq k$, that maximizes $\sum_{j \in P} \max_{i \in S} v_{ij}$. We define $v(S)$ to be the value of this objective function for $S \subseteq B$.

A natural greedy algorithm is as follows: we start with $S = \emptyset$, and while $|S| < k$, find the bank $i \in B$ that most increases the objective function, and add it to $S$. This algorithm is summarized in Algorithm 2.2.

We will show that this algorithm has a performance guarantee of $1 - \frac{1}{e}$. To do this, we require the following lemma. We let $O$ denote an optimal solution, so that $O \subseteq B$ and $|O| \leq k$.

**Lemma 2.15:** *Let $S$ be the set of banks at the start of some iteration of Algorithm 2.2, and let $i \in B$ be the bank chosen in the iteration. Then*

$$
v(S \cup \{i\}) - v(S) \geq \frac{1}{k}(v(O) - v(S)).
$$

To get some intuition of why this is true, consider the optimal solution $O$. We can allocate shares of the value of the objective function $v(O)$ to each bank $i \in O$: the value $v_{ij}$ for each $j \in P$ can be allocated to a bank $i \in O$ that attains the maximum of $\max_{i \in O} v_{ij}$. Since $|O| \leq k$, some bank $i \in O$ is allocated at least $v(O)/k$. So after choosing the first bank $i$ to add to $S$, we have $v(\{i\}) \geq v(O)/k$. Intuitively speaking, there is also another bank $i' \in O$ that is allocated at least a $1/k$ fraction of whatever wasn’t allocated to the first bank, so that there is an $i'$ such that $v(S \cup \{i'\}) - v(S) \geq \frac{1}{k}(v(O) - v(S))$, and so on.

Given the lemma, we can prove the performance guarantee of the algorithm.

**Theorem 2.16:** *Algorithm 2.2 gives a $\left(1-\frac{1}{e}\right)$-approximation algorithm for the float maximization problem.*

*Proof.* Let $S^t$ be our greedy solution after $t$ iterations of the algorithm, so that $S^0=\emptyset$ and $S=S^k$. Let $O$ be an optimal solution. We set $v(\emptyset)=0$. Note that Lemma 2.15 implies that $v(S^t)\geq \frac{1}{k}v(O)+\left(1-\frac{1}{k}\right)v(S^{t-1})$. By applying this inequality repeatedly, we have

$$
\begin{aligned}
v(S)&=v(S^k)\\
&\geq \frac{1}{k}v(O)+\left(1-\frac{1}{k}\right)v(S^{k-1})\\
&\geq \frac{1}{k}v(O)+\left(1-\frac{1}{k}\right)
\left(\frac{1}{k}v(O)+\left(1-\frac{1}{k}\right)v(S^{k-2})\right)\\
&\geq \frac{v(O)}{k}
\left(1+\left(1-\frac{1}{k}\right)+\left(1-\frac{1}{k}\right)^2
+\cdots+\left(1-\frac{1}{k}\right)^{k-1}\right)\\
&=\frac{v(O)}{k}\cdot
\frac{1-\left(1-\frac{1}{k}\right)^k}
{1-\left(1-\frac{1}{k}\right)}\\
&=v(O)\left(1-\left(1-\frac{1}{k}\right)^k\right)\\
&\geq v(O)\left(1-\frac{1}{e}\right),
\end{aligned}
$$

where in the final inequality we use the fact that $1-x\leq e^{-x}$, setting $x=1/k$. $\square$

To prove Lemma 2.15, we first prove the following.

**Lemma 2.17:** *For the objective function $v$, for any $X \subseteq Y$ and any $\ell \notin Y$,*

$$
v(Y \cup \{\ell\})-v(Y)\leq v(X \cup \{\ell\})-v(X).
$$

*Proof.* Consider any payee $j \in P$. Either $j$ is paid from the same bank account in both $X \cup \{\ell\}$ and $X$, or it is paid by $\ell$ from $X \cup \{\ell\}$ and some other bank in $X$. Consequently,

$$
\begin{aligned}
v(X \cup \{\ell\})-v(X)
&=\sum_{j \in P}\left(\max_{i \in X \cup \{\ell\}}v_{ij}-\max_{i \in X}v_{ij}\right)\\
&=\sum_{j \in P}\max\left\{0,\left(v_{\ell j}-\max_{i \in X}v_{ij}\right)\right\}.
\end{aligned}
\tag{2.6}
$$

Similarly,

$$
v(Y \cup \{\ell\})-v(Y)
=\sum_{j \in P}\max\left\{0,\left(v_{\ell j}-\max_{i \in Y}v_{ij}\right)\right\}.
\tag{2.7}
$$

Now since $X \subseteq Y$, for a given $j \in P$, $\max_{i \in Y}v_{ij}\geq\max_{i \in X}v_{ij}$, so that

$$
\max\left\{0,\left(v_{\ell j}-\max_{i \in Y}v_{ij}\right)\right\}
\leq
\max\left\{0,\left(v_{\ell j}-\max_{i \in X}v_{ij}\right)\right\}.
$$

By summing this inequality over all $j \in P$ and using the equalities (2.6) and (2.7), we obtain the desired result. $\square$

The property of the value function $v$ that we have just proved is one that plays a central role in a number of algorithmic settings, and is often called *submodularity*, though the usual definition of this property is somewhat different (see Exercise 2.10). This definition captures the intuitive property of decreasing marginal benefits: as the set includes more elements, the marginal value of adding a new element decreases.

Finally, we prove Lemma 2.15.

*Proof of Lemma 2.15.* Let $O-S=\{i_1,\ldots,i_p\}$. Note that since $|O-S|\leq |O|\leq k$, then $p\leq k$. Since adding more bank accounts can only increase the overall value of the solution, we have that

$$
v(O)\leq v(O \cup S),
$$

and a simple rewriting gives

$$
v(O \cup S)
=v(S)+\sum_{j=1}^{p}
\left[v(S \cup \{i_1,\ldots,i_j\})-v(S \cup \{i_1,\ldots,i_{j-1}\})\right].
$$

By applying Lemma 2.17, we can upper bound the right-hand side by

$$
v(S)+\sum_{j=1}^{p}\left[v(S \cup \{i_j\})-v(S)\right].
$$

Since the algorithm chooses $i \in B$ to maximize $v(S \cup \{i\})-v(S)$, we have that for any $j$, $v(S \cup \{i\})-v(S)\geq v(S \cup \{i_j\})-v(S)$. We can use this bound to see that

$$
\begin{aligned}
v(O)&\leq v(O \cup S)\\
&\leq v(S)+p[v(S \cup \{i\})-v(S)]\\
&\leq v(S)+k[v(S \cup \{i\})-v(S)].
\end{aligned}
$$

This inequality can be rewritten to yield the inequality of the lemma, and this completes the proof. $\square$

This greedy approximation algorithm and its analysis can be extended to similar problems in which the objective function $v(S)$ is given by a set of items $S$, and is monotone and submodular. We leave the definition of these terms and the proofs of the extensions to Exercise 2.10.
