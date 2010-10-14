var CANVAS_SIZE = 400;
var SQUARE_SIZE = 40;
var INIT_GAP = 3;
var INTERVAL = 100;
var gap = INIT_GAP;
var decreasing = true;
var animation_enabled = false;
var c_canvas;
var ctx;
var display_time_enabled = false;
var initialized = false;
var complete_enabling = false;

function initAnimation() {
    c_canvas = document.getElementById("c");
    ctx = c_canvas.getContext("2d");
    initialized = true;
    //draw();
    //setInterval(draw, INTERVAL);
}

function enableAnimation() {
    if (!initialized) {
        initAnimation();
    }
    complete_enabling = true;
}

function disableAnimation() {
    complete_enabling = false;
    clear_canvas();
}

function pauseAnimation() {
    animation_enabled = false;
}

function stopAnimation() {
    pauseAnimation();
    clear_canvas();
}

function initOrResumeAnimation() {
    if (!initialized) {
        initAnimation();
    }
    resumeAnimation();
}

function resumeAnimation() {
    animation_enabled = true;
}

function draw(loadPercent, playedPercentRelative, playedPercentAbsolute, playedTime, totalTime) {
    if (!animation_enabled || !complete_enabling) {
        return;
    }
    ctx.save();
    clear_canvas();
    draw_squares(SQUARE_SIZE, gap, playedPercentAbsolute);
    draw_percentage(playedPercentAbsolute, playedTime);
    ctx.restore();

    if (decreasing) {
        gap += 1;
    } else {
        gap -= 1;
    }
    if (gap > SQUARE_SIZE || gap < INIT_GAP) {
        decreasing = !decreasing;
    }
}

function clear_canvas() {
    ctx.clearRect(0,0,CANVAS_SIZE,CANVAS_SIZE);
}

function draw_squares(distance, gap_size, percent) {
    var iterations = CANVAS_SIZE / distance;
    var box_size = distance - gap_size;
    var selected_i = Math.floor(percent) % 10;
    var selected_j = Math.floor(percent / 10);
    for(var i=0; i < iterations; i++) {
        for(var j=0; j < iterations; j++) {
            ctx.fillStyle = 'rgb(' + Math.floor(255-42.5*i + gap_size*10) + ',' +   
                Math.floor(255-42.5*j + gap_size*10) + ',0)';
            var size = box_size;
            if (j === selected_j && i === selected_i) {
                var selected_gap_size = Math.floor(percent * 10) % 10;
                size = distance - selected_gap_size;
            }
            ctx.fillRect(i * distance, j * distance, size, size);
        }
    }
}

function draw_percentage(playedPercentAbsolute, playedTime) {
    if (display_time_enabled) {
        ctx.fillText("Percent: " + playedPercentAbsolute, 10, 10);
        ctx.fillText("Play time: " + playedTime, 10, 30);        
    }
}