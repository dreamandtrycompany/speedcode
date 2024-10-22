import React from 'react';

const FourthSection = () => {
  return (
    <section data-section="four" className="h-screen">
      <pre className="mt-10 font-sans font-extrabold text-white text-opacity-30 text-6xl p-5 rounded-lg overflow-x-hidden">
        <code>
          {`
              def pascals_triangle(n):
                  triangle = [[1]]
                  for i in range(1, n):
                      row = [1]
                      for j in range(1, i):
                          row.append(triangle[i-1][j-1] 
                          + triangle[i-1][j])
                      row.append(1)
                      triangle.append(row)
                  return triangle
            `}
        </code>
      </pre>
    </section>
  );
};

export default FourthSection;
