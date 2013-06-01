/**
 * Export `running`
 */

module.exports = running

/**
 * Check if the process is running
 *
 * @param {Number} pid
 */

function running(pid) {
  try {
    return process.kill(pid, 0);
  } catch(e) {
    return e.code === 'EPERM';
  }
};
