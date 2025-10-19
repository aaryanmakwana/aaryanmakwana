class Block {
  constructor() {
    this.type = null;
    this.name = "";
    this.prev = null;
    this.right_block = null;
    this.left_block = null;
  }
}

function drawBlock(ctx, node, top_left, bottom_right) {
  const mid_x = (top_left.x + bottom_right.x) / 2;
  const mid_y = (top_left.y + bottom_right.y) / 2;

  const rectWidth = 120;
  const rectHeight = 60;

  // Draw rectangle centered at mid_x, mid_y
  ctx.fillStyle = "#0078d7";
  ctx.fillRect(
    mid_x - rectWidth / 2,
    mid_y - rectHeight / 2,
    rectWidth,
    rectHeight,
  );

  ctx.strokeStyle = "#004a99";
  ctx.strokeRect(
    mid_x - rectWidth / 2,
    mid_y - rectHeight / 2,
    rectWidth,
    rectHeight,
  );

  // Draw text
  ctx.fillStyle = "white";
  ctx.font = "16px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(node.value, mid_x, mid_y);
}

// --- Draw Tree on Canvas ---
function drawTree(ctx, top_block, top_left, bottom_right) {
  console.log(top_block.name);

  if (!top_block) return;

  const mid_x = (top_left.x + bottom_right.x) / 2;
  const mid_y = (top_left.y + bottom_right.y) / 2;

  if (top_block.type == "c") {
    ctx.fillStyle = "#0078d7";
    ctx.fillRect(
      mid_x,
      mid_y,
      bottom_right.x - top_left.x,
      bottom_right.y - top_left.y,
    );
    ctx.fillStyle = "white";
    ctx.font = "16px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(node.value, mid_x, mid_y);
  } else if (top_block.name == "H") {
    drawTree(ctx, top_block.left_block, { x: mid_x, y: mid_y }, bottom_right);
    drawTree(ctx, top_block.right_block, top_left, { x: mid_x, y: mid_y });
  } else if (top_block.name == "V") {
    drawTree(ctx, top_block.left_block, top_left, { x: mid_x, y: mid_y });
    drawTree(ctx, top_block.right_block, { x: mid_x, y: mid_y }, bottom_right);
  }
}

function checkPolishNotation(input) {}

// --- Run Button Handler ---
function runNotation() {
  const input = document.getElementById("left-input").value.trim();
  if (!input) {
    alert("Please enter a Polish notation expression.");
    return;
  }

  let current_block = new Block();
  let prev_block = new Block();

  let i = 0;
  while (i < input.length) {
    //console.log(input[i]);
    if (i == 0) {
      current_block.prev = null;
      prev_block = current_block;
    }

    if (input[i] == "H" || input[i] == "V") {
      current_block.type = "x";
      current_block.value = input[i];
      current_block.right = prev_block;
      current_block.left = prev_block.prev;
      current_block.prev = prev_block.prev.prev;
    } else {
      current_block.type = "c";
      console.log(current_block.type);
      current_block.value = input[i];
      current_block.right = prev_block;
      current_block.left = prev_block.prev;
      current_block.prev = prev_block;
    }
    prev_block = current_block;
    i++;
  }

  //alert("func1 done");

  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  top_left = { x: 0, y: 0 };
  bottom_right = { x: canvas.width, y: canvas.height };

  // Example: just draw one block with the input value
  const node = { value: input };
  //drawBlock(ctx, node, { x: 0, y: 0 }, { x: canvas.width, y: canvas.height });
  console.log(current_block);
  drawTree(ctx, current_block, top_left, bottom_right);
}

// --- Download Button Handler ---
function downloadImage() {
  const canvas = document.getElementById("canvas");
  const link = document.createElement("a");
  link.download = "polish-notation.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
}
