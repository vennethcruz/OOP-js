// const circle = {
//     radius: 1,
//     location: 1,
//     draw: () => {
//         console.log("hello asd")
//     }
// };

// circle.draw()

//Lecture 1

const createCircle = (radius) => {
  return {
    radius,
    draw: () => {
      console.log("draw funciton");
      console.log(radius);
    },
  };
};

const circle = createCircle(1).draw();

const Circle = (radius) => {
  this.radius = radius;
  this.draw = () => {
    console.log("draw this");
  };
};

export const computeDistance = () => {
  try {
  } catch (error) {
    console.log({ compute_distance_error: error });
  }
};

const hello = new Circle(1);
