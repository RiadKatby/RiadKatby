# 2.2 The k-center problem

The problem of finding similarities and dissimilarities in large amounts of data is ubiquitous: companies wish to group customers with similar purchasing behavior, political consultants group precincts by their voting behavior, and search engines group webpages by their similarity of topic. Usually we speak of *clustering* data, and there has been extensive study of the problem of finding good clusterings.

Here we consider a particular variant of clustering, the $k$-center problem. In this problem, we are given as input an undirected complete graph $G=(V,E)$, with a distance $d_{ij}\geq 0$ between each pair of vertices $i,j\in V$. We assume $d_{ii}=0$, $d_{ij}=d_{ji}$ for each $i,j\in V$, and that the distances obey the *triangle inequality*: for each triple $i,j,k\in V$, it is the case that $d_{ij}+d_{jk}\geq d_{ik}$. In this problem, distances model similarity: vertices that are closer to each other are more similar, whereas those farther apart are less similar. We are also given a positive integer $k$ as input. The goal is to find $k$ clusters, grouping together the vertices that are most similar into clusters together. In this problem, we will choose a set $S\subseteq V$, $|S|=k$, of $k$ *cluster centers*. Each vertex will assign itself to its closest cluster center, grouping the vertices into $k$ different clusters. For the $k$-center problem, the objective is to minimize the maximum distance of a vertex to its cluster center. Geometrically speaking, the goal is to find the centers of $k$ different balls of the same radius that cover all points so that the radius is as small as possible. More formally, we define the distance of a vertex $i$ from a set $S\subseteq V$ of vertices to be $d(i,S):=\min_{j\in S}d_{ij}$. Then the corresponding radius for $S$ is equal to $\max_{i\in V}d(i,S)$, and the goal of the $k$-center problem is to find a set of size $k$ of minimum radius.

In later chapters we will consider other objective functions such as minimizing the sum of distances of vertices to their cluster centers; that is, minimizing $\sum_{i\in V}d(i,S)$. This is called the $k$-median problem, and we will consider it in Sections 7.7 and 9.2. We shall also consider another variant on clustering called correlation clustering in Section 6.4.

We give a greedy 2-approximation algorithm for the $k$-center problem that is simple and intuitive. Our algorithm first picks a vertex $i\in V$ arbitrarily, and puts it in our set $S$ of cluster centers. Then it makes sense for the next cluster center to be as far away as possible from all the other cluster centers. Hence, while $|S|<k$, we repeatedly find a vertex $j\in V$ that determines the current radius (or in other words, for which the distance $d(j,S)$ is maximized) and add it to $S$. Once $|S|=k$, we stop and return $S$. Our algorithm is given in Algorithm 2.1.

An execution of the algorithm is shown in Figure 2.2. We will now prove that the algorithm is a good approximation algorithm.

**Theorem 2.3:** *Algorithm 2.1 is a 2-approximation algorithm for the $k$-center problem.*

*Proof.* Let $S^*=\{j_1,\ldots,j_k\}$ denote the optimal solution, and let $r^*$ denote its radius. This solution partitions the nodes $V$ into clusters $V_1,\ldots,V_k$ where each point $j\in V$ is placed in $V_i$ if it is closest to $j_i$ among all of the points in $S^*$ (and ties are broken arbitrarily). Each pair of points $j$ and $j'$ in the same cluster $V_i$ are at most $2r^*$ apart: by the triangle inequality, the distance $d_{jj'}$ between them is at most the sum of $d_{jj_i}$, the distance from $j$ to the center $j_i$, plus $d_{j_i j'}$, the distance from the center $j_i$ to $j'$ (that is, $d_{jj'}\leq d_{jj_i}+d_{j_i j'}$); since $d_{jj_i}$ and $d_{j_i j'}$ are each at most $r^*$, we see that $d_{jj'}$ is at most $2r^*$.

Now consider the set $S\subseteq V$ of points selected by the greedy algorithm. If one center in $S$ is selected from each cluster of the optimal solution $S^*$, then every point in $V$ is clearly within $2r^*$ of some selected point in $S$. However, suppose that the algorithm selects two points within the same cluster. That is, in some iteration, the algorithm selects a point $j\in V_i$, even though the algorithm had already selected a point $j'\in V_i$ in an earlier iteration. Again, the distance between these two points is at most $2r^*$. The algorithm selects $j$ in this iteration because it is currently the furthest from the points already in $S$. Hence, all points are within a distance of at most $2r^*$ of some center already selected for $S$. Clearly this remains true as the algorithm adds more centers in subsequent iterations, and we have proved the theorem. The instance in Figure 2.2 shows that this analysis is tight.

We shall argue next that this result is the best possible: if there exists a $\rho$-approximation algorithm with $\rho<2$, then P = NP. To see this, we consider the *dominating set problem*, which is NP-complete. In the dominating set problem, we are given a graph $G=(V,E)$ and an integer $k$, and we must decide if there exists a set $S\subseteq V$ of size $k$ such that each vertex is either in $S$, or adjacent to a vertex in $S$. Given an instance of the dominating set problem, we can define an instance of the $k$-center problem by setting the distance between adjacent vertices to 1, and nonadjacent vertices to 2: there is a dominating set of size $k$ if and only if the optimal radius for this $k$-center instance is 1. Furthermore, any $\rho$-approximation algorithm with $\rho<2$ must always produce a solution of radius 1 if such a solution exists, since any solution of radius $\rho<2$ must actually be of radius 1. This implies the following theorem.

**Theorem 2.4:** *There is no $\alpha$-approximation algorithm for the $k$-center problem for $\alpha<2$ unless P = NP.*

```text
Pick arbitrary i ∈ V
S ← {i}
while |S| < k do
    j ← argmax_{j ∈ V} d(j, S)
    S ← S ∪ {j}
```

**Algorithm 2.1:** A greedy 2-approximation algorithm for the $k$-center problem.

**Figure 2.2:** An instance of the $k$-center problem where $k=3$ and the distances are given by the Euclidean distances between points. The execution of the greedy algorithm is shown; the nodes 1, 2, 3 are the nodes selected by the greedy algorithm, whereas the nodes 1*, 2*, 3* are the three nodes in an optimal solution.
