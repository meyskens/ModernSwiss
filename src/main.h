#pragma once
#include <pebble.h>

// Hand path definitions
extern const GPathInfo MINUTE_HAND_POINTS;
extern const GPathInfo HOUR_HAND_POINTS;

// Tick handler
void handle_tick(struct tm *t, TimeUnits units_changed);
